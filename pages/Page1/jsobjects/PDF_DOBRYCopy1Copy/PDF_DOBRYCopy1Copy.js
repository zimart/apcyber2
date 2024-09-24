export default {
	
	
	// async BuildPDF (data = Table4.selectedRow) {
BuildPDF (data = zapytanie1.data) {
			
				 //import jsPDF from 'jspdf',
      //import autoTable from 'jspdf-autotable',
      // import autoTable from 'jspdf-autotable'
	    const pdf = jspdf.jsPDF();
	  
	   	const formattedData = Table4.tableData.map(item => ({
  //modifiedDate: item.modifiedDate.toString(),
 // Amount: item.Amount.toString(),
 // szerokosc: item.szerokosc.toString()
			//indexszer: JSON.stringify(item.indexszer)
					 
}));
	const body = [
               ['SL.No', 'Product Name', 'Price', 'Model'],
               [1, 'I-phone', 75000, '2021'],
               [2, 'Realme', 25000, '2022'],
               [3, 'Oneplus', 30000, '2021'],
               ];
	
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
    pdf.setFont ("");
	  pdf.setFontSize("10")
		pdf.text ("Hello sgradhnworld", 10, 10);
		pdf.text ("Hello world!", 90, 50);
		//pdf.text (data.szerokosc.toString(), 90, 50);
		pdf.text ("Hello world!", 20, 20);	
	 // pdf.table({ body: body, startY: 70, theme: 'grid',})
		//pdf.table(20, 30, formattedData, Table4.columnOrder, {autoSize: true});
		pdf.table(20, 30,zapytanie1.data, Table4.columnOrder, {autoSize: true, fontSize :10,padding:1,headerBackgroundColor:'#f5f5f5',printHeaders:true,headers:true,rowStart:2 });
	 // pdf.__createTable_1 ({  theme: 'grid',             })
    // save the data to this file
	
		//pdf.text (, 10, 20);
		//pdf.text (html.(Table4.tableData), 80, 20) ;
		//pdf.text (data.skugen, 10, 30);
		//pdf.table(20.30,)
	  
	
		return pdf.output("dataurlstring");
	}
}