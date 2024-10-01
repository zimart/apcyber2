export default {
	
const doc = await new jspdf.jsPDF();
             let result = get_lot_detail.data;
            let info =[]
            result.forEach((element) => {
                info.push([element.szerokosc,element.wysokosc])
            })
             
             
                
        doc.setFont("bold").setFontSize(30).text(5,15,get_report_detail.data[0].JobNumber.toString())
            doc.setFontSize(20).text(90,15,get_report_detail.data[0].Date.toString())
            doc.setFontSize(20).text(150,15,get_job_reports.data[0].JobClassification+ "  Job Report")
            doc.setLineWidth(1).line(5,17,200,17)
            
                                 
                 doc.autoTable({
        startX: 30,
        startY: 30,
        head: 
                     [["szerokosc","wysokosc"]],
       body: info
    });

	
}