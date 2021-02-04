//Dobbelsteen
var numbers = [1,2,3,4,5,6];//Array voor de dobbelsteen nummers.
var button = document.createElement('button');//Maakt een button element aan.
var image = document.getElementById("zijde")//Pakt de image element met daarin de id van het element.
document.body.appendChild(button);
button.innerHTML = "Druk hier";

button.onclick = function(){//Begin van de functie.
    var random = Math.floor(Math.random() * 6);//Pakt een random nummer tussen 0 en 5;
    var output = numbers[random];//Pakt een random nummer uit de array.
        console.log(output)//Laat in de console zien welk index nummer uit de array is gepakt.

    if(output == numbers[0]){
        image.setAttribute("src","img/One.gif");
    } if(output == numbers[1]){
        image.setAttribute("src","img/Two.gif");
    } if(output == numbers[2]){
        image.setAttribute("src","img/Three.gif");
    } if(output == numbers[3]){
        image.setAttribute("src","img/Four.png");
    } if(output == numbers[4]){
        image.setAttribute("src","img/Five.gif");
    } if(output == numbers[5]){
        image.setAttribute("src","img/Six.png");
    }

    alert("Jou getal is " + output);

}//Einde functie.
