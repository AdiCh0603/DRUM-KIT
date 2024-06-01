var buttons = document.querySelectorAll("button");

var soun = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var x = new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/" + soun[i] + ".mp3");
        x.play();
        buttons[i].style.color="white"; 
        buttonanimaiton(buttons[i].innerHTML);
    });
}

//addEventListener("keypress",function(event){this.alert("Key "+event.key+" was pressed")});

addEventListener("keypress",function(event){

    if(event.key=='w'){
        var z=new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/crash.mp3");
        z.play();
        buttonanimaiton(event.key);
    }
    else if(event.key=='a'){
        var z=new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/kick-bass.mp3");
        z.play();
        buttonanimaiton(event.key);
    }
    else if(event.key=='s'){
        var z=new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/snare.mp3");
        z.play();
        buttonanimaiton(event.key);
    }
    else if(event.key=='d'){
        var z=new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/tom-1.mp3");
        z.play();
        buttonanimaiton(event.key);
    }
    else if(event.key=='j'){
        var z=new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/tom-2.mp3");
        z.play();
        buttonanimaiton(event.key);
    }
    else if(event.key=='k'){
        var z=new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/tom-3.mp3");
        z.play();
        buttonanimaiton(event.key);
    }
    else if(event.key=='l'){
        var z=new Audio("/Users/adityachaudhary/Desktop/Drum Kit Starting Files/sounds/tom-4.mp3");
        z.play();
        buttonanimaiton(event.key);
    }
});

function buttonanimaiton(currentkey){
    var active=document.querySelector("."+currentkey);
    if (active) {
        active.classList.add("pressed");
        setTimeout(function() {
            active.classList.remove("pressed");
        }, 100); // Adjust the time as needed
    }
}

