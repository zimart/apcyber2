export default {
kategoria: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var wybranakategoria = kategoriaselect.selectedOptionLabel;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
if (wybranakategoria === 'SCREENY') { 
  showModal(LanguageLoading.name)
	system_zapytaj.run()
	.then(() => 
  closeModal(LanguageLoading.name));
};

},
	
//async kategoria2(kategoria3 = kategoriaselect.selectedOptionValue){
//		if (!this.resources[SCREENY]){
//			showModal(LanguageLoading.name);
//			await system_zapytaj.run();
//			closeModal(LanguageLoading.name);
				
			
//		} else {
			
//		}
//	},

	
	
	
	
}