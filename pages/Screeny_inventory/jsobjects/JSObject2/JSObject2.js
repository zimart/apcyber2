import jsPDF from 'jspdf';

async function loadFont() {
const response = await fetch('https://3d.e-zimon.pl/RobotoCondensed-Light-normal.js');
const fontScript = await response.text();
eval(fontScript); // Evaluate the script to register the font
}

export default {
async BuildPDF() {
await loadFont(); // Ensure the font is loaded before creating the PDF

const doc = new jsPDF();
doc.setFont('RobotoCondensed-Light-normal'); // Use the font name defined in the generated .js file
doc.text("Załóż", 10, 10);

return doc.output("dataurlstring");
}
}

