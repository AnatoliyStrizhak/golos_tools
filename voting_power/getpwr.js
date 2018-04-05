var bat1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gQEFQAVmoqkzgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAB+klEQVQ4y32TwWpTQRSGv5l7E9I0TZO01ZBqWoVQFRQFX0EpFNGVUnDnE7ixdFE3QsGdKG7qE7hy0SpE48KNO4sgIlqhxTYxVKS2KW16b3KOCxttmon/8sx888/5D8eoiNKSKljL8tIStdoWKORHRkgNDv45OygVUVXRljYq3xXQRDKlib6UZtIZbVOzqSqiPga+fPzEzPQ0qrCzt0t/egDf8wBoijJ59RoNEXpjMR4+mSOZTGKqq6s6fLLA3akpjg4N0E3GWF6WSpRel/i1XcO8X1zU8YkrVMqrPF5/wIasd0AK5KOjTPo3iKXS6F6A3wpFpUklWGZl9zMGcwgVNGEQ27JnH9xXzh8iHvcdH1Wy/hGMsX8rB24Zyo2fbDbWXRwRr7+t1PZ8k5DQhGhHMhCaRtss28BhP0fMRJ3hHLdZMMYBirKw+YIfwRoOQ/KJC1xP33SAVrl/bJZAAucce2wPhF16nC3fY61RwTvUpAeMxc/yKDPnAi23czPs6G5nOEC/l+jueGf5FtVgxdnjicRF5rPFTlARnhbmgboz1bhJQd2RqsXj0tdxqsE3p+No73neZt/8A1UEi8FYeHfmA4I4U/W8KJFtba0KJqzXtS+ZpFA4hefb7muFYXOrxrnTYzx7voDRpmi4V6dYfIVR4X+KRCNcnpgAEX4DeFbbAS1M0SQAAAAASUVORK5CYII=";
var bat2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gQEFQcYq3pOtAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABeklEQVQ4y5WUPUtcQRSGn3P3et119+oWIixBEf+FpAi2wTRaWgqWJo0W+QViJ4hCCGIRAkkVYiDapNBC7FQUq5hKsqnEQl313nktXD8WZwj7wikGznPmfM2YnBNPZcbHpWXqf+tYISLt6WH63VuQwOzRTc4JM85Pz3ARpKUS1b4aHUkCiPNGg+OjQ8qVCnEUUUrTuyCS9HVlVVboULGcKil3q1Z70WLFcqpiV0VgWpibl1wu5HIB+vf7WHmehy3L9OvnugYHhyRJMRYB0Nc/0FLDM5nRXa2S3WQARLSrZuz2wabipweRAdcB10IYvOQljr3HfFqwMYwZP9jFthe6z0fa8YMXvMKxD8hz4zgw7QdL/ACct5VGDOyHanxDzq433ZhRzGb9YJEPwEVgfL1IdT94xXscfwJdHQEm/GAni8BloLOdwIkfbDCF4yBQ42tg8jm4vbXJ8Mj3u7cW2NH6yTeSJGmOVdLG2pqaw/uvffn0WXJODz9AW5K4BTs8thneRyUpAAAAAElFTkSuQmCC";
var bat3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gQEFQcnHRxjiQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABXklEQVQ4y9WUsUokQRiEv39mdMad2WECcTFRXFcWfA4jX2Aj4YIz8AUu0PfRBTMDExHWwOwwvES5N5BDEcXR7jIY5XZ1RsXMgoKm6aKq///vNnkvxmHG/t4ef88vwAwDfu1sg9nksRfh3c0NHkjjadrFLDNZBsDl9RVnoxG91T4I0jyvlJJ0sDvUdNJSkuWKs1ydzrzmntnpzCvNCyVZrla70OaPDUmSyTlZGPLn9xkL/RWkyeRj4Xgs71la6XN6fESEcwB0e8vEacp7cH6GJI55AIKXzWanegR8Ed9TaGCfF0b/lwLnq9Gqq/CrkZuMurYGYQhR9JZFAYHVOQKHh83ZzKpEtXccDKDVqudyD8KgxlEeNxyi8qGhippwjMajhOvrcHLSUMYIV5ZjwqCyv778RzIavduC0D3ivMe8qve49XNTVT8+ZnexK8mr+gHM0O0t5fMTa54WMdXOQeIJ3OSR4BVoVL4AAAAASUVORK5CYII=";


function get_pwr()
{
    golos.api.getAccounts(['astrizak'], function(err, response){

        var res=response[0]['voting_power']/100;

        if(res<60)
        {
            document.getElementById('pwr_img').src = bat3;
        }

        if(res>70)
        {
            document.getElementById('pwr_img').src = bat2;
        }

        if(res>90)
        {
            document.getElementById('pwr_img').src = bat1;
        }

        document.getElementById('pwr_img').title = res+"%";

    });
}


if(location.hostname.match(/golos.io/i) && document.getElementById("content") && document.getElementsByClassName("sub-menu"))
{
    var node = document.createElement("div");
    node.id = "pwr";
    node.innerHTML = "<img src='./icon.png' id='pwr_img' style='height:20px! important;' title=''>";
    document.getElementsByClassName("sub-menu")[0].appendChild(node);

    get_pwr();
}

document.addEventListener('click', function(e) {
    var target = e.target
    currentItem = target.parentElement;
    if (currentItem.className!=null && currentItem.className == "entry-title") 
    {
        get_pwr();
    }
}, false);

