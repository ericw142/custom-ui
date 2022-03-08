const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LayoutSchema = new Schema({
    user: { type: String } ,
    tasks: { type: Object },
    columns: { type: Object },
    columnOrder: { type: Array },
});

const Layout = mongoose.model('custom-ui-layouts', LayoutSchema);
module.exports = Layout;