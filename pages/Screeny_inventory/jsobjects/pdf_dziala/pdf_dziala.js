export default {

async BuildPDF () {
       // const pdf = new jsPDF();
      const pdf = jspdf.jsPDF();
		// Example data
//const data = [
//{ id: 1, name: "John Doe", country: "USA" },
//{ id: 2, name: "Anna Smith", country: "UK" },
//{ id: 3, name: "Peter Jones", country: "Canada" }
//];

// Extract column names from data keys
//const columns = Object.keys(data[0]).map(key => ({ header: key, dataKey: key }));
	
	
//           const formattedData = tabela_glowna.tableData.map(item => ({
//          //indexszer: JSON.stringify(item.indexszer)
//
//}));
	
	
	
      pdf.setFont ("Helvetica");
      pdf.setFontSize("10")
       pdf.text ("Hello wreahtrsjytdufygj", 10, 10);
       pdf.text ("nie dizla", 90, 50);
       pdf.table(20, 30,tabela_glowna.tableData, tabela_glowna.columnOrder, {autoSize: false, fontSize :8,padding:1,headerBackgroundColor:'#f5f5f5',printHeaders:true,headers:true,rowStart:2 });
	
	//pdf.__createTable_2(30,50,tabela_glowna.tableData);

   // pdf.table(20, 30,tabela_glowna.tableData, tabela_glowna.columnOrder, {autoSize: true, fontSize :7,padding:1,headerBackgroundColor:'#f5f5f5',printHeaders:true,headers:true,rowStart:2 });
	


	
	
// Add a table with auto columns
//__createTable(pdf, {
 
	
//columns: columns,
//body: data,
//});

	

        return pdf.output("dataurlstring");
	//download(pdf.output(), 'timesheet.pdf');
    }
}