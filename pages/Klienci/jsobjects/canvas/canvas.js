export default {


html2canvas(data_table.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});


	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}