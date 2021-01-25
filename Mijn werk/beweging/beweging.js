//Beweging doormiddel van DOM.

var directions = ["up","down","kleur"];//Een array met de waarde erin van welke kant het op gaat.
var top = 200;//De hoeveelheid pixels de blok opgaat.
var down = 200;
var blok = document.getElementById('achtergrond');
var text = document.getElementById('text');

function beweging(){
    var random = Math.floor(Math.random() * 3);//Pakt een random waarde tussen 0 en 2.
    var direction = directions[random];//Pakt een willekeurig index cijfer uit de array.
    console.log(direction);//Laat een willekeurige waarde zien uit de array en dat push die door in de console.log.

    if(direction == "up"){
        top = top + 50;
        text.style.top = top + "px";
    } 
    else if(direction == "down"){
        down = down + 50;
        text.style.bottom = down + "px";
    } else if(direction == "kleur"){
        text.style.color = "blue";
        text.style.backgroundColor = "red";
    } 
}


var timer = setInterval(beweging,1000);