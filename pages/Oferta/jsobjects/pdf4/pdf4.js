export default {
	 

async BuildPDF (data = tabela_glowna.tableData) {

	    const pdf = jspdf.jsPDF();
			const formattedData = tabela_glowna.tableData.map(item => ({
 
  szerokosc: item.szerokosc.toString(),
	
}))
	
    pdf.setFont ("times");
		pdf.text ("Hello sgradhnworld", 10, 10);
		pdf.text ("Hello world!", 90, 50);
		pdf.text ("Hello world!", 20, 20);	
		//pdf.table (20, 30, formattedData, tabela_glowna.columnOrder, {autoSize: true});
		//pdf.table(20, 30, formattedData, Table4.columnOrder, {autoSize: true});
		//pdf.text (, 10, 20);
		//pdf.text (html.(Table4.tableData), 80, 20) ;
		//pdf.text (data.skugen, 10, 30);
		//pdf.table(20.30,)
		return pdf.output("dataurlstring");
		 
	}
}