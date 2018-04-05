<?php
require('vendor/autoload.php');

use WebSocket\Client;

if (isset($_REQUEST["limit"]) && $_REQUEST["limit"]!="" && is_numeric($_REQUEST["limit"]))
{
    $limit=$_REQUEST["limit"]*1;
}
else
{
    $limit=10;
}

if (isset($_REQUEST["usr"]) && $_REQUEST["usr"]!="")
{
    $apicall="get_discussions_by_feed";
    $usr='"'.$_REQUEST["usr"].'"';
}
else
{
    $apicall="get_discussions_by_created";
    $usr="";
}


$client = new Client("wss://ws17.golos.io/");
$client->send('{"id":0,"method":"call","jsonrpc":"2.0","params":["social_network","'.$apicall.'",[{"select_authors":['.$usr.'],"limit":'.$limit.'}]]}');

$golosPosts=json_decode($client->receive(),$assoc=true);


header('Content-type: text/xml;charset=UTF-8');
echo '<?xml version="1.0" encoding="UTF-8" ?>'; 

?>

<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
>


<channel>
    <title>GOLOS.IO лента</title>
    <atom:link href="http://brehen-sobaken.ru/golos/feed.php" rel="self" type="application/rss+xml" />
    <link>http://brehen-sobaken.ru/golos/feed.php</link>

<?php

    if(isset($_REQUEST["usr"]))
    {
	echo "<description>Лента пользователя ".$_REQUEST["usr"]."</description>";
    }
    else
    {
    	echo "<description>Новые статьи на Голосе</description>";
    }
?>


    <language>ru</language>

<?php	
function truncate($text, $length) {
   $length = abs((int)$length);
   if(strlen($text) > $length) {
      $text = preg_replace("/^(.{1,$length})(\s.*|$)/s", '\\1...', $text);
   }
   return($text);
}

function writeFeed($val)
{

    $front="golos.io";

    if (isset($_REQUEST["front"]) && $_REQUEST["front"]=="goldvoice")
    {
	$front="goldvoice.club";
    }

    $link="http://".$front.$val["url"];

    if (isset($_REQUEST["txt"]) && $_REQUEST["txt"]=="full")
    {
	$body=$val["body"];
    }
    else
    {
	$body=truncate($val["body"],1024);
    }
?>

<item>
<title><![CDATA[<?php echo $val["title"]; ?>]]></title>
<guid isPermaLink="true"><?php echo $link; ?></guid>
<dc:creator><![CDATA[<?php echo $val["author"]; ?>]]></dc:creator>
<description><![CDATA[<?php echo $body; ?>]]></description>
<pubDate><?php echo $val["created"]; ?></pubDate>
</item>    

<?php
}

foreach ($golosPosts["result"] as $key => $val) 
{	
    if(isset($_REQUEST["norepost"]))
    {
	if (!isset($val["reblogged_by"][0]))
	{
    	    writeFeed($val);
	}
    }
    else
    {
        writeFeed($val);
    }
}
 

?>
</channel>
</rss>
