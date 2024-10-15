export default {
	
naped: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var system = system_select.selectedOptionLabel;

//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
if (system === 'SOLAR ZIIIP' || system === 'SOLAR ZIIIP EM') { napedwybor = "SOLAR"; }
else  napedwybor = "SOMFY" ; 
return napedwybor;
},
	

	
};