export default {

	
async BuildPDF () {
//const doc = jspdf.jsPDF()
const doc = jspdf.jsPDF();
const data2 = tabela_glowna.tableData;

//const data = tabela_glowna.tableData;
//const waluta = netto+walutaskrot.text;	
// Custom headers
const columns = [
{ header: 'Produkt', dataKey: 'Produkt' },
{ header: 'Ilosc', dataKey: 'Ilosc' },
{ header: 'Netto', dataKey: 'cenanetto' } ,// Custom header with currency
{ header: 'Rabat %', dataKey: 'Rabatprocent' } ,// Custom header with currency
{ header: 'Rabat', dataKey: 'Rabat' } ,// Custom header with currency
{ header: 'Netto po rabacie', dataKey: 'nettopo' } ,// Custom header with currency
//{ header: 'Opis', dataKey: 'Opis' }, // Custom header with currency
{ header: 'Razem netto', dataKey: 'razemnetto' }, // Custom header with currency
{ header: 'VAT %', dataKey: 'vat' }, // Custom header with currency
{ header: 'Brutto', dataKey: 'Brutto' } // Custom header with currency
];	
	
// Example data with computed values

const currencyRate = kursinput.text; // Example currency rate for conversion
const data = tabela_glowna.tableData.map(item => ({
//Produkt: item.Produkt +"\n"+item.opiszrabatami,
	Produkt: item.Produkt +"\n"+item.opisbezrabatow,
Ilosc: item.Ilosc,
cenanetto: (item.cenanetto / currencyRate).toFixed(2),// Convert price using currency rate
//Opis: item.opiszrabatami,
Rabatprocent: item.rabatogolny,
Rabat: (item.kwotarabatogolny/currencyRate).toFixed(2),
nettopo: (item.cenaporabacie / currencyRate).toFixed(2),
razemnetto: (item.razemnetto/ currencyRate).toFixed(2),
vat: item.vat,
Brutto: (item.brutto/ currencyRate).toFixed(2)
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
      doc.setFontSize("8")
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
	theme: 'grid',
	headStyles: { fillColor:  [247, 247, 247] ,
           // lineColor: 'black',
							 lineWidth: 0.1,
            //lineColor: 'black'
							 fontSize: 8
							},
	startY: 40,
	columnStyles: { europe: { halign: 'center',valign: 'middle' },
             Produkt: {
       //fontStyle: 'bold',
							 halign: 'left',
							 valign: 'middle'
      },
								
								},
	styles: { cellPadding: 1.5, fontSize: 8,
					 textColor:0,
					
           // lineColor: 'black',
					 cellWidth: 'auto',
					overflow: 'linebreak',
//					overflow: 'linebreak'|'ellipsize'|'visible'|'hidden' = 'linebreak'
//fillColor: 255,
//textColor: Color? = 20
//cellWidth: 'auto'|'wrap'|number = 'auto'
minCellWidth: 15,
minCellHeight:12,
//minCellHeight: number = 0
halign: 'center',
valign: 'middle'
//	halign: 'left'|'center'|'right' = 'left'
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
	


return doc.output("dataurlstring");
//doc.save('table.pdf');
}
}