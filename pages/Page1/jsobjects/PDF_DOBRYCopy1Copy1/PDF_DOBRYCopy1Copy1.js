export default {

async BuildPDF () {

	    const pdf = jspdf.jsPDF();
	   	const formattedData = Table4.tableData.map(item => ({
  		//indexszer: JSON.stringify(item.indexszer)
					 
}));
	
    pdf.setFont ("times");
	  pdf.setFontSize("10")
		pdf.text ("Hello sgradhnworld", 10, 10);
		pdf.text ("Hello world!", 90, 50);
		pdf.table(20, 30,Table4.tableData, Table4.columnOrder, {autoSize: true, fontSize :10,padding:1,headerBackgroundColor:'#f5f5f5',printHeaders:true,headers:true,rowStart:2 });
	
	pdf.table(20, 60,Table5.tableData, Table5.columnOrder, {autoSize: true, fontSize :7,padding:1,headerBackgroundColor:'#f5f5f5',printHeaders:true,headers:true,rowStart:2 });
	 
		return pdf.output("dataurlstring");
	}
}