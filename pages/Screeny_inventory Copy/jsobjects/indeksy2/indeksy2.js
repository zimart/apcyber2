export default {
 	
	 indekswys: function () {
    var szerokoscm2 = wysokosc_input.text;
		 var szerm55;
		if (szerokoscm2 > 0 && szerokoscm2 <=1000) {var szerm55 = 1000;}	
		else if (szerokoscm2 > 1000 && szerokoscm2 <=1250) {var szerm55 = 1250 ;}
		else if (szerokoscm2 > 1250 && szerokoscm2 <=1500) {var szerm55 = 1500 ;}
		else if (szerokoscm2 > 1500 && szerokoscm2 <=1750) {var szerm55 = 1750 ;}
		else if (szerokoscm2 > 1750 && szerokoscm2 <=2000) {var szerm55 = 2000 ;}
		else if (szerokoscm2 > 2000 && szerokoscm2 <=2250) {var szerm55 = 2250 ;}
		else if (szerokoscm2 > 2250 && szerokoscm2 <=2500) {var szerm55 = 2500 ;}
		else if (szerokoscm2 > 2500 && szerokoscm2 <=2750) {var szerm55 = 2750 ;}
		return szerm55;
  },
	
	
	
};
