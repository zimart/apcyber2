export default {
	
	  BuildPDF () {
		const pdf = jspdf.jsPDF();
		pdf.text ("Hello sgradhnworld", 10, 10);
		pdf.text ("Hello world!", 90, 50);
		//pdf.text (, 10, 20);
		//pdf.text (html.(Table4.tableData), 80, 20) ;
		//pdf.text (data.skugen, 10, 30);
		return pdf.output("dataurlstring");
	}
}