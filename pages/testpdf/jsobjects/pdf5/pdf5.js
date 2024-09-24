export default {
htmltoPDF: async() => {
        try {
            await dsHTMLInvoice.run();
            var htmlContent = await dsHTMLInvoice.data[0].InvoiceHTML;
            var doc = new jspdf.jsPDF();

            const options = {
                        width: 215.9,
                        height: 279.4
                };
            await doc.fromHTML(htmlContent, options);

            var data = await doc.output();

            await download(data, 'Invoice.pdf');

            //await storeValue('Invoicepdf',data) 
            //return appsmith.store.Invoicepdf 

        } catch (error) {
            console.error(error);
        }
    }
