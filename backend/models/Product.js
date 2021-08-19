const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    precio: String,
    codigo: String,
    descripcion: String,
    fecha: {type: Date, default: Date.now},
    state: { type: Number, default: 1 },
});

const product = mongoose.model('product', productSchema);

module.exports = product;