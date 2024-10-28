export default {

//nazwapliku() {
	//const data=Text21.text;
//	return data;
//},
	
async BuildPDF () {
const doc = jspdf.jsPDF();
const data2 = glowna_tabela.tableData;

const Roboto = Input1.text;

//const data = tabela_glowna.tableData;
//const waluta = netto+walutaskrot.text;	

// Custom headers
const columns = [
{ header: 'Produkt', dataKey: 'Produkt' },
{ header: 'Ilość', dataKey: 'Ilosc' },
{ header: 'Netto', dataKey: 'cenanetto' } ,// Custom header with currency
{ header: 'Rabat %', dataKey: 'Rabatprocent' } ,// Custom header with currency
{ header: 'Rabat', dataKey: 'Rabat' } ,// Custom header with currency
{ header: 'Netto po rabacie', dataKey: 'nettopo' } ,// Custom header with currency
//{ header: 'Opis', dataKey: 'Opis' }, // Custom header with currency
{ header: 'Razem netto', dataKey: 'razemnetto' }, // Custom header with currency
{ header: 'VAT %', dataKey: 'vat' }, // Custom header with currency
{ header: 'VAT', dataKey: 'vatkwota' }, // Custom header with currency
{ header: 'Brutto', dataKey: 'Brutto' } // Custom header with currency
];	
	
// Example data with computed values

const currencyRate = kursinput.text; // Example currency rate for conversion
const data = glowna_tabela.tableData.map(item => ({
//Produkt: item.Produkt +"\n"+item.opiszrabatami,
Produkt: item.Produkt +"\n"+item.opiszrabatami,
Ilosc: item.Ilosc,
cenanetto: (item.cenanetto / currencyRate).toFixed(2),// Convert price using currency rate
//Opis: item.opiszrabatami,
Rabatprocent: item.rabatogolny,
Rabat: (item.kwotarabatogolny/currencyRate).toFixed(2),
nettopo: (item.cenaporabacie / currencyRate).toFixed(2),
razemnetto: (item.razemnetto/ currencyRate).toFixed(2),
vat: item.vat,
vatkwota: (item.razemnetto*(item.vat/100)).toFixed(2),
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

 // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);
 //doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");

 // doc.setFont("Amiri"); // set font
	
doc.addFileToVFS("RobotoCondensed-Regular.ttf", Roboto);
doc.addFont("RobotoCondensed-Regular.ttf", "Roboto", "normal");
doc.addFont("RobotoCondensed-Regular.ttf", "Roboto", "bold");

     doc.setFont("Roboto"); // set font
	
    //  doc.setFont ("Helvetica");
      doc.setFontSize("9")
      doc.text (nagl.text, 15, 20);
	    doc.setFontSize("10")
	    doc.text (i18n.translate("Oferta"), 15, 42);
	    doc.setFontSize("10")
	    doc.text (dziekujemy.text, 15, 65);
	    doc.text (ponizej.text, 15, 68);
	    doc.text (walutatekst.text, 15, 74);
	    doc.setFontSize("10");
	  //  doc.setFontType('bold');
	    doc.text(klient.text, 15, 48);
	 
	  // doc.setFont("helvetica","bold");
     //doc.text(20, 50, 'This is helvetica bold.');
		  
     doc.setTextColor(255,0,0);
     doc.text(20, 40, opisoferty.text);
	   doc.setTextColor(0,0,0);
	
	
	    doc.addImage(Text13.text,'PNG',175,15,20,20);
	    doc.setDrawColor(255,152,0);
	    doc.setLineWidth(1.5);
      doc.line(15, 15, 170, 15);
	
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
							 fontSize: 9,
							 fontStyle: 'bold',
							},
	startY: 75,
	columnStyles: { europe: { halign: 'center',valign: 'middle' },
             Produkt: {
       //fontStyle: 'bold',
							 halign: 'left',
							 valign: 'middle'
      },
								
								},
	styles: { cellPadding: 1.2, fontSize: 9,
					 textColor:0,
					 //font: 'Amiri',
					 font: 'Roboto',
					//  font:'Helvetica',
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
//const nazwa = Text21.text;
	
// Add text below the table
const finalY = doc.lastAutoTable.finalY; // The y position where the table ends
doc.text(i18n.translate("Razem netto"), 15, finalY + 10);
doc.setFontSize("12")
//doc.text(Text5.text, 15, finalY + 15);
//return doc.output("dataurlstring");
download(doc.output(),'oferta.pdf');
	
	
//doc.save('table.pdf');
}
	

	
	
}
	