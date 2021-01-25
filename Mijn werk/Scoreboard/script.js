//Score board.
var container = document.getElementById('container');
var create = document.createElement('button');
var buttonText = document.createTextNode('Klik hier');
container.appendChild(create);
create.appendChild(buttonText);

var number = 0;


create.addEventListener('click',function(){
    number++;
    console.log(number);
    document.getElementById('score').innerHTML = number;
});



