var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;
var walking = false;

// Move the image on screen with 10px
function dogWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  // reset image position to start
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

// Call dogWalk function every 50 ms
function startDogWalk() {   
  dogTimer = window.setInterval(dogWalk, delayMs);
  document.getElementById("start-button").disabled = true;
  document.getElementById("info").innerHTML = movePixels*60000/delayMs + " px/secunda";
  walking=true;  
  
}

function stopDogWalk() {
    clearInterval(dogTimer);
    document.getElementById("start-button").disabled = false;
    document.getElementById("info").innerHTML = 0 + " px/secunda";
    walking=false;   
    
}

function speedDogWalk() {
    if(walking)
    {
        clearInterval(dogTimer);    
        dogTimer = window.setInterval(dogWalk, delayMs-10);
        delayMs-=10;
        document.getElementById("info").innerHTML = movePixels*60000/delayMs + " px/secunda";
    }
    
}

function resetDogWalk() {
    if(walking)
    {
        clearInterval(dogTimer);        
        delayMs=50;
        startDogWalk();
    }
    
}

var x = document.createElement("BUTTON");
x.setAttribute("id", "reset-button");
var t = document.createTextNode("Reset-speed");
x.appendChild(t);
document.getElementById("buttons").appendChild(x);

document.getElementById("start-button").addEventListener("click", startDogWalk);
document.getElementById("stop-button").addEventListener("click", stopDogWalk);
document.getElementById("speed-button").addEventListener("click", speedDogWalk);
document.getElementById("reset-button").addEventListener("click", resetDogWalk);

function idleAlert() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; 
    window.onclick = resetTimer;     

    function alert() {
        window.alert("Sesiune expirata");
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(alert, 30000); 
    }
}
idleAlert();
