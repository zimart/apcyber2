export default {
    genPDF: () => {
        const doc = new jspdf.jsPDF();
        doc.text ('Timesheet',20,20);
        doc.table(20, 30, tabela_glowna.tableData, tabela_glowna.columnOrder, {autosize: true});
        download(doc.output(), 'timesheet.pdf');
    },
    debug: () => {
  return Object.values(tabela_glowna.tableData[0]).map(value => typeof value)
 }
}