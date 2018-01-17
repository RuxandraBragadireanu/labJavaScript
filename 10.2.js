function square() {
    var x = document.getElementById("square-input").value;

    document.getElementById("solution").innerHTML = x*x;
}

function half() {
    var x = document.getElementById("half-input").value;

    document.getElementById("solution").innerHTML = x/2;
}

function percent() {
    var proc = document.getElementById("percent1-input").value;
    var nr = document.getElementById("percent2-input").value;
    document.getElementById("solution").innerHTML = proc*nr/100;
}

function area() {
    var x = document.getElementById("area-input").value;

    document.getElementById("solution").innerHTML = Math.PI*x*x;
}

document.getElementById("square-button").addEventListener("click", square);
document.getElementById("half-button").addEventListener("click", half);
document.getElementById("percent-button").addEventListener("click", percent);
document.addEventListener("keypress", area);