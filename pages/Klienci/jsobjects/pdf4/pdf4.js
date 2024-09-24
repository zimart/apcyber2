export default {
    genInvoice: async () => {
        const doc = await new jspdf.jsPDF();
			  const tableDatatransform = data_table.tableData.map(item => ({
        accountid: item.accountid.toString(),
        
        //Point: item.Point.toString()
}))
        doc.text("title", 20, 20);
        doc.table(20, 30, tableDatatransform, data_table.columnOrder, {autoSize: true});
        //await download(doc.output(), "invoice.pdf");
		
			 await doc.output("dataurlstring");
		},
    debug: () => {
  return Object.values(data_table.tableData[0]).map(value => typeof value)
			

    }
}