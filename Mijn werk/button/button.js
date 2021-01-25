//Button test

var body = document.getElementsByTagName("body")[0];//Om de body te kunnen manupileren,
var button1 = document.getElementById("button1");//Om de button manupileren.
var button2 = document.getElementById("button2");
var image = document.getElementById("image");//Om de image te manupileren.

function buttonClick1(){//Event button 1.
    alert('Playstation logo');//Geeft een alert aan =.
    image.src = "image1.jpg";//Laat een image zien met de aangegevende src.
    body.style.backgroundColor = "blue";//Styled de body in dit geval geeft het een kleur aan.
    button1.style.backgroundColor = "blue";//Geeft de button een kleur zelfde geldt voor button 2.
    button2.style.backgroundColor = "blue";
}

//Alles wat function 1 doet doet de function 2 ook.
function buttonClick2(){//Event button 2.
    alert('Xbox logo');
    image.src = "image2.jpg";
    body.style.backgroundColor = "green";
    button1.style.backgroundColor = "green";
    button2.style.backgroundColor = "green";
}