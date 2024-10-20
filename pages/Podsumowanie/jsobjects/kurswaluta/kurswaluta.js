export default {
			
kurs: function () {
var wybranawaluta = Select6.selectedOptionValue;
var kursik = 1;
if (wybranawaluta === "PLN") { kursik = 1; }
else if (wybranawaluta === "EUR") {  kursik = kurseuro.text ; }
return kursik;
},
	
kurs2: function () {
var wybranawaluta = Select6.selectedOptionValue;
var kursik = 1;
if (wybranawaluta === "PLN") { kursik = 1; }
else if (wybranawaluta === "EUR") {  kursik = kurseuro.text ; }
return kursik;
},
	
kurs_dodatkowe: function () {
var wybranawaluta = Select6.selectedOptionValue;
var kursikeuro = kursinput.text;
if (wybranawaluta === "PLN") { kwotapln = ""; }
else if (wybranawaluta === "EUR") {  kwotapln = kursikeuro.text * Input2.text ; }
return kwotapln;
}
	
	
}