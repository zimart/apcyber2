export default {
			
kurs: function () {
var wybranawaluta = Select6.selectedOptionValue;
var kursik = 1;
if (wybranawaluta === "PLN") { kursik = 1; }
else if (wybranawaluta === "EUR") {  kursik = kurseuro.text ; }
return kursik;
}
}