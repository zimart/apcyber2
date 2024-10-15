export default {
przelicz_glowna: function () {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
showModal(LanguageLoading.name)
updatemain2.run()
.then(() => 
ustawrabatogolny.run())
.then(() => 
tabela_inventory_main_id.run())
.then(() => 
closeModal(LanguageLoading.name));

},
	
	
	
	
}
	
//async kategoria2(kategoria3 = kategoriaselect.selectedOptionValue){
//		if (!this.resources[SCREENY]){
//			showModal(LanguageLoading.name);
//			await system_zapytaj.run();
//			closeModal(LanguageLoading.name);
				
			
//		} else {
			
//		}
//	},
