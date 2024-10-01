export default {

	const table = __createTable_1(doc, {Table1.tableData})
	//var doc = new jsPDF();
    // You can use html:
   // doc.__createTable_1({Table1.tableData});
    
    // Or JavaScript:
   // doc.__drawTable_1({
   //     head: [['kolorm', 'Email', 'Country']],
   //     body: [
   //         ['David', 'david@example.com', 'Sweden'],
   //         ['Castille', 'castille@example.com', 'Norway'],
   //         // ...
   //     ]
  //  });
	
	__drawTable(doc, table);
    
    doc.save('table.pdf');

	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}
