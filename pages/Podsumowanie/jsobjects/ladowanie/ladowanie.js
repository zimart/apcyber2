export default {
loading: function () {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
showModal(LanguageLoading.name)
	.then(() =>
	zapytaj_kategoria.run())
	.then(() =>
	system_zapytaj.run())
	.then(() =>   
closeModal(LanguageLoading.name));

},
	
	
	
	
}