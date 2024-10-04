export default {

	
async BuildPDF () {
//const doc = jspdf.jsPDF()
const doc = jspdf.jsPDF();
const data2 = tabela_glowna.tableData;
//const data = tabela_glowna.tableData;
	
// Custom headers
const columns = [
{ header: 'Produktsd', dataKey: 'Produkt' },
{ header: 'Ilosc', dataKey: 'Ilosc' },
{ header: 'Cena', dataKey: 'Cena' } // Custom header with currency
];	
	
// Example data with computed values
const currencyRate = kursinput.text; // Example currency rate for conversion
const data = tabela_glowna.tableData.map(item => ({
Produkt: item.Produkt,
Ilosc: item.Ilosc,
Cena: (item.Cena / currencyRate).toFixed(2) // Convert price using currency rate
}));	

//const columns2 = tabela_glowna.tableHeaders;
	
// Example data
//const data = [
//{ id: 1, name: "John Doe", country: "USA" },
//{ id: 2, name: "Anna Smith", country: "UK" },
//{ id: 3, name: "Peter Jones", country: "Canada" }
//];

//const columns = Object.keys(data[0]).map(key => ({ header: key, dataKey: key }));	


      doc.setFont ("Helvetica");
      doc.setFontSize("9")
      doc.text ("Hello wreahtrsjytdufygj", 10, 10);
	    doc.text("Additional Information", 15, 20);
	
	     doc.text(Text16.text, 15, 40);
	
//fault_1 (doc, {
//columnStyles: { europe: { halign: 'center' },
//						},
//tyles: { 
//        
//        fontSize: 8,
 //       cellWidth: 'auto',
//        halign: 'center',
         //fillColor: [225, 197, 238]
//     }, 
	
	// European countries centered
//body: [
 // { europe: 'Sweden', america: 'Canada', asia: 'China' },
//  { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
//],
//columns: [
//  { header: 'Europe', dataKey: 'europe' },
//  { header: 'Asia', dataKey: 'asia' },
//],
//};
	
	
	
// Add a table with auto columns
default_1(doc, {
	//theme: 'grid',
	//headStyles: { fillColor:  [206, 214, 216] },
	startY: 80,
	columnStyles: { europe: { halign: 'center' },},
	styles: { cellPadding: 1, fontSize: 8,
					 //textColor:0,
					 cellWidth: 'wrap',
					overflow: 'ellipsize',
//					overflow: 'linebreak'|'ellipsize'|'visible'|'hidden' = 'linebreak'
//fillColor: 255,
//textColor: Color? = 20
//cellWidth: 'auto'|'wrap'|number = 'auto'
minCellWidth: 6
//minCellHeight: number = 0
//halign: 'left'|'center'|'right' = 'left'
//valign: 'top'|'middle'|'bottom' = 'top'
//fontSize: number = 10
//cellPadding: Padding = 10
//lineColor: Color = 10
//lineWidth: border = 0 // If 0, no border is drawn
					
					
					
					
					},			
  columns: columns,
  body: data,
	 willDrawPage: function (data) {
      // Header
      doc.setFontSize(20)
      doc.setTextColor(40)
     // if (base64Img) {
     //   doc.addImage(base64Img, 'JPEG', data.settings.margin.left, 15, 10, 10)
      },
});
	

	
	// Add a table with auto columns
//default_1(doc,tabela_glowna.tableData);

// Add text below the table
const finalY = doc.lastAutoTable.finalY; // The y position where the table ends
doc.text("Additional Information", 14, finalY + 10);
	

//return doc.output("dataurlstring");
//doc.save('table.pdf');
	download(doc.output(), 'timesheet.pdf');
}
}