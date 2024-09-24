export default {
generateHTML(data) {
let html = ID Rodzaj Tkaniny 
; // Start table and add headers
data.forEach(row => {
html += ${row.id} ${row.tkanina_main} 
; // Add rows with data
});
html += 
; // Close table
return html;
}
};