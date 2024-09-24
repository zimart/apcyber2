export default {
	 
// async BuildPDF (data = Table4.selectedRow) {
async BuildPDF (data = Table4.tableData) {
			
				 //import jsPDF from 'jspdf',
      //import autoTable from 'jspdf-autotable',
      // import autoTable from 'jspdf-autotable'
	    const pdf = jspdf.jsPDF();
			const formattedData = Table4.tableData.map(item => ({
  //modifiedDate: item.modifiedDate.toString(),
 // Amount: item.Amount.toString(),
  szerokosc: item.szerokosc.toString(),
		//	szerokosc: JSON.stringify(item.szerokosc)
					 
}))
			//const formattedData = Table4.tableData.map(item => ({
      //system:item.system.toString();
			//const autoTable = jspdf-autotable.jsPDF();
		//	var pdf = jspdf.jsPDF({
  //orientation: 'landscape',
 // unit: 'mm',
	//			doc.addFileToVFS("MyFont.ttf", myFont);
//doc.addFont("MyFont.ttf", "MyFont", "normal");
//doc.setFont("MyFont");
  //format: [4, 2]
	//getFontSize : '5'
//})
 //    autoTable(pdf, { html: '' });
			
		// Or use javascript directly:
//autoTable(pdf, {
//  head: [['Name', 'Email', 'Country']],
//  body: [
//    ['David', 'david@example.com', 'Sweden'],
//    ['Castille', 'castille@example.com', 'Spain'],
//    // ...
 // ],
//})
    pdf.setFont ("times");
		pdf.text ("Hello sgradhnworld", 10, 10);
		pdf.text ("Hello world!", 90, 50);
		//pdf.text (data.szerokosc.toString(), 90, 50);
		pdf.text ("Hello world!", 20, 20);	
		//pdf.table(20, 30, formattedData, Table4.columnOrder, {autoSize: true});
		pdf.table(20, 30, formattedData, Table4.columnOrder, {autoSize: true});
		//pdf.text (, 10, 20);
		//pdf.text (html.(Table4.tableData), 80, 20) ;
		//pdf.text (data.skugen, 10, 30);
		//pdf.table(20.30,)
		return pdf.output("dataurlstring");
		 
	}
}