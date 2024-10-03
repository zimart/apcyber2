export default {

	
async BuildPDF () {
//const doc = jspdf.jsPDF()
const doc = jspdf.jsPDF();
const data = [
{ id: 1, name: "John Doe", country: "USA" },
{ id: 2, name: "Anna Smith", country: "UK" },
{ id: 3, name: "Peter Jones", country: "Canada" }
];

// Extract column names from data keys
const columns = Object.keys(data[0]).map(key => ({ header: key, dataKey: key }));
	
// It can parse html:
// <table id="my-table"><!-- ... --></table>
//autoTable(doc, { html: '#my-table' })

// Or use javascript directly:
//autoTable(doc, {
//  head: [['Name', 'Email', 'Country']],
//  body: [
//    ['David', 'david@example.com', 'Sweden'],
//    ['Castille', 'castille@example.com', 'Spain'],
//    // ...
// ],
//})

default_1 (doc, {
  columnStyles: { europe: { halign: 'center' } }, // European countries centered
  body: [
    { europe: 'Sweden', america: 'Canada', asia: 'China' },
    { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
  ],
  columns: [
    { header: 'Europe', dataKey: 'europe' },
    { header: 'Asia', dataKey: 'asia' },
  ],
})
	
// Add a table with auto columns
default_1 (doc, {
columns: columns,
body: data,
});

// Add text below the table
const finalY = doc.lastAutoTable.finalY; // The y position where the table ends
doc.text("Additional Information", 14, finalY + 10);
	

// Sometimes you might have to call the default function on the export (for example in Deno)
//autoTable.default(doc, { html: '#my-table' })
return doc.output("dataurlstring");
//doc.save('table.pdf');
}
}