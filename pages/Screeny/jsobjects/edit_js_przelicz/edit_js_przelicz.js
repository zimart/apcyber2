export default {
przelicz_screeny: function () {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
showModal(LanguageLoading.name)
edit_update_screeny.run()
.then(() => 
przeliczpozycje.run())
.then(() => 
tabela_inventory_id_new.run())
.then(() => 
closeModal(LanguageLoading.name))	;

},
}