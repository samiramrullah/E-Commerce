const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, require: true },
    price: { type: Number, require: true },
    categogy: { type: String, require: true },

})
module.exports = mongoose.model('Products', productSchema);
