export default {
kategoria: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var wybranakategoria = kategoriaselect.selectedOptionLabel;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
if (wybranakategoria === 'SCREENY') { 
uruchom = linia_zapytaj.run().then(() => {
  system_zapytaj.run();
  kolor_zapytaj.run();
});
}
else  uruchom = {}; 
return uruchom;
},
}