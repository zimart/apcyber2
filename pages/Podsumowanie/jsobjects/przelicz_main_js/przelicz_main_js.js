export default {
przelicz_glowna: function () {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
showModal(LanguageLoading.name)
.then(() => 
ustawrabatogolny.run())
.then(() => 
updateopismainkurs.run())
.then(() =>
tabela_glowna.run())
.then(() => 
sumakatalog.run())
.then(() => 
sumarabatu.run())
.then(() => 
razemnettoporabacie.run())
.then(() => 
closeModal(LanguageLoading.name));

},
}
	

