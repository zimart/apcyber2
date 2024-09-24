export default {
  indeksszer: function () {
    var szerokoscm= szerokosc_input.text;
		
		if (szerokoscm > 0 && szerokoscm <=1000) {var szerm = 1000;}	
		else if (szerokoscm > 1000 && szerokoscm <=1250) {var szerm = 1250 ;}
		else if (szerokoscm > 1250 && szerokoscm <=1500) {var szerm = 1500 ;}
		else if (szerokoscm > 1500 && szerokoscm <=1750) {var szerm = 1750 ;}
		else if (szerokoscm > 1750 && szerokoscm <=2000) {var szerm = 2000 ;}
		else if (szerokoscm > 2000 && szerokoscm <=2250) {var szerm = 2250 ;}
		else if (szerokoscm > 2250 && szerokoscm <=2500) {var szerm = 2500 ;}
		else if (szerokoscm > 2500 && szerokoscm <=2750) {var szerm = 2750 ;}
		else if (szerokoscm > 2750 && szerokoscm <=3000) {var szerm = 3000 ;}
		return szerm;
  },
	
	indekswys: function () {
    var wysokoscm= podawana_wysokosc_input.text;
		if (wysokoscm > 800 && wysokoscm <=1000) {var wysm = 1000;}	
		else if (wysokoscm > 1000 && wysokoscm <=1250) {var wysm = 1250 ;}
		else if (wysokoscm > 1250 && wysokoscm <=1500) {var wysm = 1500 ;}
		else if (wysokoscm > 1500 && wysokoscm <=1750) {var wysm = 1750 ;}
		else if (wysokoscm > 1750 && wysokoscm <=2000) {var wysm = 2000 ;}
		else if (wysokoscm > 2000 && wysokoscm <=2250) {var wysm = 2250 ;}
		else if (wysokoscm > 2250 && wysokoscm <=2500) {var wysm = 2500 ;}
		else if (wysokoscm> 2500 && wysokoscm <=2750) {var wysm = 2750 ;}
		else if (wysokoscm > 2750 &&wysokoscm <=3000) {var wysm = 3000 ;}
		return wysm;
  },
	
	
};
