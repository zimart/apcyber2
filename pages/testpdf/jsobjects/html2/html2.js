export default {
generateHTML(data) {
let html = ID Rodzaj Tkaniny 
; // Start table and add headers
data.forEach(row => {
html += ${row.id} ${row.rodzaj_tkaniny} 
; // Add rows with data
});
html += 
; // Close table
return html;
}
};

