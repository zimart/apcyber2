export default {
			
system: function () {
var linia = Select1.selectedOptionLabel;
var systemy;
if (linia === "PREMIUM") { systemy = 
[
  {
    "name": "Blue",
    "code": "BLUE"
  },
 
  {
    "name": "Red",
    "code": "RED"
  }
]; }
else if (linia === "STANDARD") {  systemy= [
  {
    "name": "Blue",
    "code": "BLUE"
  }]; }
return systemy;
}
}