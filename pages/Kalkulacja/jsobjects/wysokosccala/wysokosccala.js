export default {
	
wys2: function () {
var szerokoscm = rodzajwysokosci.selectedOptionValue;
var podana = podawana_wysokosc_input.text;
var skrzynka = wartoscskrzynka.text;
var szerm33;
if (szerokoscm === '1') { szerm33 = podana; }
else if (szerokoscm === '2') { szerm33 = podana + skrzynka }
return szerm33;
},
	
	
	 
	
};


    

