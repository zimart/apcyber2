export default {
	
kolor: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenasystemubaza = cena_systemu.text;
//var skrzynka = Select8.selectedOptionValue;
var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
//else if (szerokoscm === '2') { szerm33 = podana ; }
return doplatakolor.toFixed(2);
},
	
tkanina: function () {
var kosztmetra = doplatatkaninam2.text;
var powierzchniam2 = appsmith.store.powierzchniast;
//var skrzynka = Select8.selectedOptionValue;
var doplatatkanina = (doplatatkaninam2.text * powierzchnia.text);
//if (szerokoscm === '1') { szerm33 = podana; }
//else if (szerokoscm === '2') { szerm33 = podana ; }
return doplatatkanina.toFixed(2);
},
	 
wkladka: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenametra = Input20.text;
//var skrzynka = Select8.selectedOptionValue;
var dlugoscprowadnic = dlugosprowadnic.text;
var doplatawkladkacena;
if (wkladkaselect.selectedOptionLabel === 'NZIPS') {doplatawkladkacena = dlugoscprowadnic * cenametra; }
else if (wkladkaselect.selectedOptionLabel === 'NZIP/A') {doplatawkladkacena = 0; }
return doplatawkladkacena.toFixed(2);
},
	
};