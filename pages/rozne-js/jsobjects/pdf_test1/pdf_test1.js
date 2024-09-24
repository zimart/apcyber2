export default {
    async myFun1 () {
        //get the pdf
        var pdf_data = await SelectQuery.run();

        //dowload the pdf
        await download(pdf_data, 'file.pdf','application/pdf');
    }
}