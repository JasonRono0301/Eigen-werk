var animalCount = [0,0,0,0];//Array waarde van de dieren.
var animals = ['geit','konijn','schaap','koe'];
console.log(animals);
console.log(animalCount);

for(i=0; i < animals.length; i++){
    var buttons = document.createElement('button');
    document.body.appendChild(buttons);
    buttons.innerHTML = animals[i];
}



