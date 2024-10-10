export default {

async BuildPDF () {

        const pdf = jspdf.jsPDF();
           const formattedData = tabela_glowna.tableData.map(item => ({
          //indexszer: JSON.stringify(item.indexszer)

}));

    pdf.setFont ("times");
      pdf.setFontSize("10")
        pdf.text ("Hello sgradhnworld", 10, 10);
        pdf.text ("Hello world!", 90, 50);
        pdf.table(20, 30,tabela_glowna.tableData, tabela_glowna.columnOrder, {autoSize: true, fontSize :4,padding:1,headerBackgroundColor:'#f5f5f5',printHeaders:true,headers:true,rowStart:2 });

    //pdf.table(20, 60,Table5.tableData, Table5.columnOrder, {autoSize: true, fontSize :7,padding:1,headerBackgroundColor:'#f5f5f5',printHeaders:true,headers:true,rowStart:2 });

        return pdf.output("dataurlstring");
    }
}