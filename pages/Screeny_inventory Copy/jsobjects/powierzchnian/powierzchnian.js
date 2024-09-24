export default {
	
m2: function () {
var szerokoscm2 = szerokosc_input.text;
var wysokoscm2 = podawana_wysokosc_input.text;
var powierzchniam2 = (szerokoscm2*wysokoscm2)/100000;

//return 	powierzchniam2.toFixed(2);
return Number.parseFloat(powierzchniam2).toFixed(2);	
},	
	
	 
	
};