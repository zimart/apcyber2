export default {
//async parsuj2 () {
//_parser: new XMLParser.j2xParser(),
//jsonToXML: async (jsonData) => {
//try {
//return this._parser.parse(jsonData);
//} catch (error) {
//console.error("Error parsing JSON to XML:", error);
//return null;
//}
//}
//}
	
	
	
//},


async parsuj () {
//const XMLBuilder() = require('fast-xml-parser');

const options = {
    ignoreAttributes : false
};

const builder = new XMLBuilder(options);
let xmlDataStr = builder.build(jObj);
//const parser = new XMLParser();
//const builder = new XMLBuilder();
//const xmlContent = builder.build(jObj);
//jsonToXML: async (json = {"abc": "def"}) => {
//return this.parser.parse(json);
//const xmlData = `<root a="nice" checked><a>wow</a></root>`;
//const xmlData = tabela_glowna.data;
//const output = parser.parse(glowna_tabela.selectedRow);	
//const output = parser.parse(xmlData);	

//return output;
//return ;
const cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": "2020-02-03",
        "capacity": 7
        },
        {
        "color": "orange",
        "type": "SUV",
        "registration": "2021-05-17",
        "capacity": 4
        },
];
const builder = new XMLBuilder({
    arrayNodeName: "car"
});
const output = builder.build(cars);	
	
	
	
}

	
}