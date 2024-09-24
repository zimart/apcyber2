export default {
    genInvoice: async () => {
        const doc = await new jspdf.jsPDF();
        doc.text("title", 20, 20);
        //doc.table(20, 30, Table4.tableData, Table4.columnOrder, {autoSize: true});
        await download(doc.output(), "invoice.pdf");
			 //await doc.output("dataurlstring");
    }
}


