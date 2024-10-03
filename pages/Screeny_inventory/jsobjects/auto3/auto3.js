export default {

async BuildPDF () {
   const pdf = jspdf.jsPDF();

	
	
	
   pdf.autoTable({ 
       html: 'niewime', 
       startX: 10,
       startY: 15,
       theme: 'grid',
       bodyStyles: {lineColor: [0, 0, 0]},
       styles: { 
          font: "Times", //<------ This is the font. I have already added this font using doc.addfont()
          fontSize: 10,
          cellWidth: 'auto',
          halign: 'center',
          fillColor: [225, 197, 238]
       }, 
    })
    
    //pdf.save("file.pdf");
    return pdf.output("dataurlstring");
}
//pdf.save('table.pdf');
}
