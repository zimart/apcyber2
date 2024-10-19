export default {
	
kolor: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenasystemubaza = cena_systemu.text;
var czydoplatakolor = Input17.text;
//var skrzynka = Select8.selectedOptionValue;
if (czydoplatakolor === 'tak') { doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100)); }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
else doplatakolor = '0';
return doplatakolor;
},
	
tkanina: function () {
var kosztmetra = doplatatkaninam2.text;
var powierzchniam2 = appsmith.store.powierzchnia;
//var skrzynka = Select8.selectedOptionValue;
var tkaninacos = Select9.selectedOptionValue;
//var doplatatkanina = (doplatatkaninam2.text * powierzchnia.text);

if (tkaninacos === 'COPACO LUNAR') { doplatatkanina = (doplatatkaninam2.text * powierzchnia.text); }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
else doplatatkanina = '0';
//if (szerokoscm === '1') { szerm33 = podana; }
//else if (szerokoscm === '2') { szerm33 = podana ; }
return doplatatkanina;
},
	 
wkladka: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenametra = Input19.text;
var klipsy = kosztklipsow.text;
//var skrzynka = Select8.selectedOptionValue;
var dlugoscprowadnic = dlugosprowadnic.text;
var doplatawkladkacena;
if (wkladkaselect.selectedOptionLabel === 'NZIPS'&& Select1.selectedOptionLabel=== 'STANDARD') {doplatawkladkacena = (dlugoscprowadnic * cenametra)+klipsy; }
else if (Select1.selectedOptionLabel !== 'STANDARD') {doplatawkladkacena = 0; }
return doplatawkladkacena;
},
	
};