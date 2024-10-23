export default {
    _parser: XMLParser(),
    jsonToXML: async (json = {"abc": "def"}) => {
        return this._parser.parse(json);
    }
}