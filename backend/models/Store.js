const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    ciudad: String,
    fecha: { type: Date, default: Date.now },
    state: { type: Number, default: 1 },
});

const store = mongoose.model('store', storeSchema);

module.exports = store;