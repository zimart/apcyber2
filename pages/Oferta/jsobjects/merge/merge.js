export default {
	
	mergeTemplate( orderData = tabela_glowna.tableData){
		
		return `
		${szerokosc}
		${tabela_glowna.tableData}
		<td>sz</td>
		<p>cos</p>
		`;
		
	},
	
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}