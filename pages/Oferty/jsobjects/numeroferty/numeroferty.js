export default {
	myVar1: [],
	myVar2: {},

	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]

	},
	miesiac () {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		var numm = pobierzid.data[0].id_oferta;
		var kolejny = numm+1;
		var przedr = 'OF/'
		today = przedr + mm + "/" + kolejny;
		return (today);
	}
}