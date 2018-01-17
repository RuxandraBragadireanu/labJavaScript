var myObjectLiteral {
    movePixels: 10, // number of pixels
    delayMs: 50, // number of miliseconds
    dogTimer : null,
    walking : false,
    
    // Move the image on screen with 10px
    dogWalk : function() {
      var img = document.getElementsByTagName('img')[0];
      var currentLeft = parseInt(img.style.left);
      img.style.left = (currentLeft + movePixels) + 'px';
      // reset image position to start
      if (currentLeft > (window.innerWidth-img.width)) {
        img.style.left = '0px';
      }
    },
    
    // Call dogWalk function every 50 ms
    startDogWalk : function () {   
      dogTimer = window.setInterval(dogWalk, delayMs);
      document.getElementById("start-button").disabled = true;
      document.getElementById("info").innerHTML = movePixels*60000/delayMs + " px/secunda";
      walking=true;  
      
    },
    
    stopDogWalk : function() {
        clearInterval(dogTimer);
        document.getElementById("start-button").disabled = false;
        document.getElementById("info").innerHTML = 0 + " px/secunda";
        walking=false;   
        
    },
    
    speedDogWalk : function() {
        if(walking)
        {
            clearInterval(dogTimer);    
            dogTimer = window.setInterval(dogWalk, delayMs-10);
            delayMs-=10;
            document.getElementById("info").innerHTML = movePixels*60000/delayMs + " px/secunda";
        }
        
    },
    
    resetDogWalk : function() {
        if(walking)
        {
            clearInterval(dogTimer);        
            delayMs=50;
            startDogWalk();
        }
        
    },
    
    x : document.createElement("BUTTON"),
    id : x.setAttribute("id", "reset-button"),
    t : document.createTextNode("Reset-speed"),
    but : x.appendChild(t),
    
    apbut: document.getElementById("buttons").appendChild(x),
    
    st :document.getElementById("start-button").addEventListener("click", startDogWalk),
    stop: document.getElementById("stop-button").addEventListener("click", stopDogWalk),
    speed: document.getElementById("speed-button").addEventListener("click", speedDogWalk),
    res: document.getElementById("reset-button").addEventListener("click", resetDogWalk),
    
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
    
}