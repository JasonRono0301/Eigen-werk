var animailArray = [0,0,0,0];//Array voor de dieren.
var animals = ['kip','konijn','geit','schaap'];//Array met de dieren namen.

for(i=0; i < animals.length; i++){
    var buttons = document.createElement('button');
    var text = animals.length;
    document.body.appendChild(buttons);
    buttons.innerHTML = animals[i];
}

for(i=0; i < animals.length; i++){
    document.write( "<br>" + animals[i] + ":" + animailArray[i] + "<br>");
}



