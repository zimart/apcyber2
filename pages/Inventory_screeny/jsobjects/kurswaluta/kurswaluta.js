export default {
			
kurs: function () {
var wybrana = walutaskrot.text;
var podana = podawana_wysokosc_input.text;
var kursik;
if (wybrana === "PLN") { kursik = 1; }
else if (wybrana === "EUR") {  kursik= kurseuro.text ; }
return kursik;
}
}