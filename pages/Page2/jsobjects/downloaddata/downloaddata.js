export default {
    async myFun1 () {
        //get the pdf
        var pdf_data = await kolorm.run();

        //dowload the pdf
        await download(pdf_data, 'file.pdf','application/pdf');
    }
}