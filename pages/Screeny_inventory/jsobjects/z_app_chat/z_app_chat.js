export default {
generatePDF: () => {
const { __createTable } = window.__createTable;
const doc = new __drawTable();
const columns = ["ID", "Name", "Country"];
const rows = [
[1, "John Doe", "USA"],
[2, "Anna Smith", "UK"],
[3, "Peter Jones", "Canada"]
];
doc.__drawTable({
head: columns,
body: rows
});
doc.save("table.pdf");
}
};

