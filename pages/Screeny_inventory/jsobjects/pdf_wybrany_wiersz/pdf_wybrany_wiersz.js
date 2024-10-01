export default {

	  BuildPDF (data=tabela_glowna.selectedRow) {
		const pdf = jspdf.jsPDF();
		pdf.text ('Hello world!', 10, 10);
		pdf.text (data.moc, 10, 20);
		pdf.text (data.skugen, 10, 30);
		return pdf.output("dataurlstring")
	}
}