export default {
async BuildPDF() {
const pdf = jspdf.jsPDF();

	 pdf.setFont ("Helvetica");
      pdf.setFontSize("10")
	
// Example data
const data = [
{ id: 1, name: "Johnj Doe", country: "USA" },
{ id: 2, name: "Anna Smith", country: "UK" },
{ id: 3, name: "Peter Jones", country: "Canada" }
];

// Extract column names from data keys
const columns = Object.keys(data[0]).map(key => ({ header: key, dataKey: key }));

// Add a table with auto columns
//__drawTable(pdf, {
//columns: columns,
//body: data,
//});
	
	__createTable(pdf, {
  head: [['Name', 'Email', 'Country']],
  body: [
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    // ...
  ],
})


// Add text below the table
//const finalY = pdf.lastAutoTable.finalY; // The y position where the table ends
//pdf.text("Additional Information", 14, finalY + 10);
pdf.text("Additional Information", 14,10);
return pdf.output("dataurlstring");
}
}