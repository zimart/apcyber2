export default {
	
m22: function () {
var szerokoscm2 = data_table.szerokosc.;
//var wysokoscm2 = wysokosc_input.text;
var wysokoscm2 = appsmith.store.calkowita;	
var powierzchniam2 = (szerokoscm2*wysokoscm2)/1000000;

//return 	powierzchniam2.toFixed(2);
return Number.parseFloat(powierzchniam2).toFixed(2);	
//	return powierzchniam2
},	
	
	 
	
};