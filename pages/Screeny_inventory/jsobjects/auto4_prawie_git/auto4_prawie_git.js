export default {

	
async BuildPDF () {
//const doc = jspdf.jsPDF()
const doc = jspdf.jsPDF();
const data2 = tabela_glowna.tableData;
//const data = tabela_glowna.tableData;
	
// Custom headers
const columns = [
{ header: 'Produktsd', dataKey: 'Produkt' },
{ header: 'Iloaasdg', dataKey: 'Ilosc' },
{ header: 'Cena (EUR)', dataKey: 'Cena' } // Custom header with currency
];	
	
// Example data with computed values
const currencyRate = Select6.selectedOptionValue; // Example currency rate for conversion
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

doc.text("Additional Information", 15, 20);
	
	
	
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
columns: columns,
body: data,
});
	

	
	// Add a table with auto columns
default_1(doc,tabela_glowna.tableData);

// Add text below the table
const finalY = doc.lastAutoTable.finalY; // The y position where the table ends
doc.text("Additional Information", 14, finalY + 10);
	


return doc.output("dataurlstring");
//doc.save('table.pdf');
}
}