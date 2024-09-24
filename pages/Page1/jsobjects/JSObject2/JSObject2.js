export default {
	
//	var doc = jspdf;
const doc = jspdf.jsPDF();
doc.html(Table4.tableData, {
   callback: function (doc) {
     doc.save();
   },
   x: 10,
   y: 10
});
	}
}