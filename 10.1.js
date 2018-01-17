function makeStory (){
    var location = document.getElementById("places").value;
    var adjective = document.getElementById("adjective").value;
    var person = document.getElementById("person").value;
    
    document.getElementById("story").innerHTML= person + " a vizitat " + adjective + " " + location + ".";
}

document.getElementById("story-button").addEventListener("click", makeStory);