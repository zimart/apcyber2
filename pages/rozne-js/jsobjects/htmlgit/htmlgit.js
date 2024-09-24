export default {
  generateHTML() {
    let html = "szerokosc wysokosc"; // Start table and add headers
    tabela_screeny_inventory_id.tableData.forEach(row => {
      html += `${row.szerokosc} ${row.wysokosc}`; // Add rows with data
    });
    html += ""; // Close table
    return html;
  }
};