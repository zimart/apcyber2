export default {
    genPDF: () => {
        const doc = new jspdf.jsPDF();
        doc.text ('Timesheet',20,20);
       // doc.table (20, 30, Table4.tableData, Table4.columnOrder, {autosize: true});
        download(doc.output(), 'timesheet.pdf');
    },
    debug: () => {
  return Object.values(Table4.tableData[0]).map(value => typeof value);
			
			
			
			
 }
}