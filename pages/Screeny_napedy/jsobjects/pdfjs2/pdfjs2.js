export default {
	
	  BuildPDF (data = data_table.tableData) {
		const pdf = jspdf.jsPDF();
		pdf.text ("Hello sgradhnworld", 10, 10);
		pdf.text ("Hello world!", 90, 50);
		//pdf.text (data.szerokosc.toString(), 90, 50);
		pdf.text ("Hello world!", 20, 20);	
		pdf.table (20, 30, data_table.tableData.concat());
		//pdf.text (, 10, 20);
		//pdf.text (html.(Table4.tableData), 80, 20) ;
		//pdf.text (data.skugen, 10, 30);
		return pdf.output("dataurlstring");
	}
}