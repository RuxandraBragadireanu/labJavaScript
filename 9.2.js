document.body.style.fontFamily =  "Arial,sans-serif";

document.getElementById("nickname").textContent="Andra";
document.getElementById("favorites").textContent="movies";
document.getElementById("hometown").textContent="Bucharest";

var li = document.querySelectorAll("li");
li.forEach(function(entry){
    entry.setAttribute("class", "list-item");
});
