//Associative array.
var drinken = {"fris":0,"bier":0,"wijn":0};
const PRIJZEN = {"frisPrijs":2,"bierPrijs":3,"wijnPrijs":4};
    console.log(PRIJZEN);
    console.log(drinken);

        drinken['fris'] = prompt('Hoeveel fris wilt u bestellen?');
        drinken['bier'] = prompt('Hoeveel bier wilt u bestellen?');
        drinken['wijn'] = prompt('Hoeveel wijn wilt u bestellen?');

            var total = {"Fris Totaal": drinken['fris'] * PRIJZEN['frisPrijs'], "Bier Totaal": drinken['bier'] * PRIJZEN['bierPrijs'],"Wijn Totaal": drinken['wijn'] * PRIJZEN['wijnPrijs']};
                console.log(total);
for(i in total){
    document.write(i + "= " + total[i] + " Euro" + "<br>");
}
