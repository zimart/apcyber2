export default {
async BuildPDF () {
const doc = jspdf.jsPDF();
const data2 = glowna_tabela.tableData;
const numer = idoferty_appsmith.text;
const Roboto = Input1.text;



// Custom headers
const columns = [
//{ header: 'Lp', dataKey: 'Lp' },
{ header: 'Produkt', dataKey: 'Produkt' },
{ header: 'Menge', dataKey: 'Ilosc' },
{ header: 'Netto', dataKey: 'cenanetto' } ,// Custom header with currency
{ header: 'Rabatt %', dataKey: 'Rabatprocent' } ,// Custom header with currency
{header: 'Rabattbetrag', dataKey: 'Rabat' } ,// Custom header with currency
{ header: 'Netto nach Abzug', dataKey: 'nettopo' } ,// Custom header with currency
//{ header: 'Opis', dataKey: 'Opis' }, // Custom header with currency
{ header: 'Nettosumme', dataKey: 'razemnetto' }, // Custom header with currency
{ header: 'Steuer %', dataKey: 'vat' }, // Custom header with currency
{ header: 'Steuerbetrag', dataKey: 'vatkwota' }, // Custom header with currency
{ header: 'Zu bezahlen', dataKey: 'Brutto' } // Custom header with currency
];	
	
	
	
const columns2 = [
{ header: 'szczegoly', dataKey: 'szczegoly' }
];	

const columns3 = [
{ header: 'szczegoly', dataKey: 'szczegoly' }
];	

const currencyRate = kursinput.text; // Example currency rate for conversion

const data = glowna_tabela.tableData.map(item => ({
//Produkt: item.Produkt +"\n"+item.opiszrabatami,
Lp:item.Ilosc,
//Produkt: item.Produkt +"\n"+item.opiszrabatami_de,
Produkt: item.Produkt,
Ilosc: item.Ilosc,
cenanetto: (item.cenanetto / currencyRate).toFixed(2),// Convert price using currency rate
Opis: item.opiszrabatami,
Rabatprocent: item.rabatogolny,
Rabat: (item.kwotarabatogolny/currencyRate).toFixed(2),
nettopo: (item.cenaporabacie / currencyRate).toFixed(2),
razemnetto: (item.razemnetto/ currencyRate).toFixed(2),
vat: item.vat,
vatkwota: (item.razemnetto*(item.vat/100)).toFixed(2),
Brutto: (item.brutto/ currencyRate).toFixed(2)
}));	
	

	
doc.addFileToVFS("RobotoCondensed-Regular.ttf", Roboto);
doc.addFont("RobotoCondensed-Regular.ttf", "Roboto", "normal");

     doc.setFont("Roboto"); // set font
	
    //  doc.setFont ("Helvetica");
	    doc.addImage(Text13.text,'PNG',175,15,20,20);
	    doc.setDrawColor(255,152,0);
	    doc.setLineWidth(1.5);
      doc.line(15, 15, 170, 15);
	
	        doc.setDrawColor(247, 247, 247);
	    doc.setLineWidth(8);
      doc.line(15, 46, 198, 46);
	
	
	    doc.setFontSize("9")
      doc.text (nagl.text, 15, 20);
	
	    doc.setFontSize("11");
	    doc.text ("ANGEBOT", 16, 48);
	    doc.text (Text22.text, 35, 48);
	   // doc.text (Text21.text, 175, 48);
	    
	
	    doc.setFontSize("10");
	    doc.text ("Kunde: ", 15, 58);
	    doc.text(klient.text, 15, 63);
	 
	    doc.setFontSize("10")
	   doc.text (ponizej.text, 15, 84);
	   doc.text (dziekujemy.text, 15, 80);
	
	
	
default_1 (doc, {
theme: 'grid',
	headStyles: { 
		fillColor:  [255, 255, 255] ,
           // lineColor: 'black',
							 lineWidth: 0,
            //lineColor: 'black'
							 fontSize: 10,
							 fontStyle: 'bold',
							},
	startY: 90,
	columnStyles: { europe: { halign: 'left',valign: 'middle' },
             Produkt: {
       //fontStyle: 'bold',
							 halign: 'left',
							 valign: 'middle',
							 lineWidth: 0,
      },
								
								},
	styles: { cellPadding: 1, fontSize: 10,
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
minCellWidth: 5,
minCellHeight:5,
//minCellHeight: number = 0
halign: 'left',
valign: 'middle',
//	halign: 'left'|'center'|'right' = 'left'
//valign: 'top'|'middle'|'bottom' = 'top'
//fontSize: number = 10
//cellPadding: Padding = 10
//lineColor: Color = 10
lineWidth: border = 0 // If 0, no border is drawn
				
					
					
					
					},		
	
	// European countries centered
body: [
  { opis: opisoferty.text },
 
],
columns: [
  { header: i18n.translate("Opis oferty"), dataKey: 'opis' },
 
]

});
	
const finalY1 = doc.lastAutoTable.finalY; // The y position where the table ends	
 doc.setFontSize("10");
 doc.text (walutatekst.text, 15, finalY1+8);	

	
	
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
	startY: finalY1+10,
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

// Add text below the table
const finalY2 = doc.lastAutoTable.finalY; // The y position where the table ends
doc.text("tutaj netto", 15, finalY2 + 10);
doc.addPage();
//doc.text(textpdfdlugi.text, 15, finalY2 + 30);	
	
const finalY3 = doc.lastAutoTable.finalY; // The y position where the table ends		
doc.text(textpdfdlugi.text, 15, finalY3 + 10);		
	

	
//return doc.output("dataurlstring");
	download(doc.output(), 'angebot_.pdf');
//doc.save('table.pdf');
}
}
	