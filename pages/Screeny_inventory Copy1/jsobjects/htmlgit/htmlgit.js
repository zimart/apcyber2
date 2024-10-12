export default {
  generateHTML() {
    let html = "szerokosc wysokosc"; // Start table and add headers
    tabela_screeny_inventory_id.tableData.forEach(row => {
      html += `<table><td>${row.szerokosc} </td><span> ${row.wysokosc}</table>`; // Add rows with data
    });
    html += ""; // Close table
    return html;
  }
};