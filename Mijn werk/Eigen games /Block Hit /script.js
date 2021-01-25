//De block hit game.
var container = document.getElementById('container');//Main variabele.
var colors = ['red','blue','green'];//Index number of 2.

//DOM code.

var button = document.createElement('button');
var text = document.createTextNode('Random kleur');
button.appendChild(text);
container.appendChild(button);

var goodpoints = 0;
var falsepoints = 0;

var scorepanel = document.getElementById('score');
var goodScore = document.getElementById('score1');
var falseScore = document.getElementById('score2');

function change(){//Begin function
    var random = Math.floor(Math.random() * 3);//Pick a random number between 0 and 3.
    var colorChange = colors[random];//Pick a random index from the array.
    console.log(colorChange);//Output in the console wich index and the value it has chosen.

    if(colorChange == 'red'){
        button.onclick = function(){
            alert('Fout');
            falseScore.innerHTML + falsepoints++;
            falseScore.innerHTML = 'False Points: ' +  falsepoints++;
        }
        button.style.backgroundColor = "red";
    } if(colorChange == 'blue'){
        button.onclick = function(){
            alert('Goedzo');
           goodScore.innerHTML + goodpoints++;
           document.getElementById('score1').innerHTML = 'Good Points:' +  goodpoints;
        }
        button.style.backgroundColor = "blue";
    } if(colorChange == 'green'){
        button.onclick = function(){
            alert('Fout');
            falseScore.innerHTML + falsepoints++;
            document.getElementById('score2').innerHTML = 'False Points:' +  falsepoints;
        }
        button.style.backgroundColor = 'green';
        
    }

    //Code for the score.
}//End function.

change();

