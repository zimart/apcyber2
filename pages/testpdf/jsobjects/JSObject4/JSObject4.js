export default {
	
generateHTML(Table4.tableData) {
let data = Table4.tableData;
let html = Table4.tableHeaders;
;
data.forEach(row => {
html += ${row.linia} ${row.skugen} 
;
});
html += 
;
return html;
}

};