export default {
			
system: function () {
var linia = Select1.selectedOptionLabel;
var systemy;
if (linia === "PREMIUM") { systemy = 
[
  {
    "label": "EASY ZIIIP",
    "value": "ZiiiP"
  },
 {
    "label": "EASY LINE",
    "value": "Line"
  },
 {
    "label": "EASY SCREEN",
    "value": "Screen"
  },
 {
    "label": "EASY SCREEN SP",
    "value": "Screen_SP"
  },

	 {
    "label": "EASY LINE SP",
    "value": "Line_SP"
  },
	 {
    "label": "SOLAR ZIIIP",
    "value": "SOLAR-ZiiiP"
  },
	 {
    "label": "SOLAR ZIIIP EM",
    "value": "SOLAR-ZiiiP-EM"
  }




];
												 
												 }
else if (linia === "STANDARD") {  systemy= [
{
    "label": "SRS90 ZiiiP-E",
    "value": "SRS90_ZiiiP-E"
},
{
    "label": "SRS90 ZiiiP SP",
    "value": "SRS90_ZiiiP_SP"
},

	{
    "label": "SRS90 ZiiiP-G",
    "value": "SRS90_ZiiiP-G"
},

	{
    "label": "SRS90 ZiiiP E-SRS-4",
    "value": "SRS90_ZiiiP-E-SRS4"
},

	{
    "label": "SRS90 ZiiiP SP SRS-4",
    "value": "SRS90_ZiiiP_SP-SRS4"
},


]; }
return systemy;
},
	
kolor: function () {
var linia = Select1.selectedOptionLabel;
var systemy;
if (linia === "PREMIUM") { systemy = 
[
  {
    "label": "Blue",
    "value": "BLUE"
  }];
												 
												 }
else if (linia === "STANDARD") {  systemy= [
  {
    "name": "Blue",
    "code": "BLUE"
  }]; }
return systemy;
}	
	
}