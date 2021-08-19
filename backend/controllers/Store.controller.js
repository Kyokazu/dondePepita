const Store = require('../models/Store');

const getAll = async(req, res) => {
    const stores = await Store.find();
    if (!stores) return res.status(401).send('Store not found');
    return res.status(200).send({ stores });
}

const create = async(req, res) => {
    if (!req.body.nombre || !req.body.direccion || !req.body.ciudad)
        return res.status(400).send('Invalid request');
    const store = new Store({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad
    });
    const result = await store.save();
    if (!result) return res.status(401).send('The store is not created');
    return res.status(200).send({ result });
};

module.exports = { getAll, create };