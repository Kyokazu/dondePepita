const Product = require('../models/Product');

const getAll = async(req, res) => {
    const products = await Product.find();
    if (!products) return res.status(401).send('There is no product created');
    return res.status(200).send({ products });
}

const create = async(req, res) => {
    if (!req.body.name || !req.body.precio || !req.body.codigo || !req.body.descripcion) return res.status(401).send('Invalid request');
    const product = new Product({
        name: req.body.name,
        precio: req.body.precio,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion
    });
    const result = await product.save();
    if (!result) return res.status(401).send('The product is not created');
    return res.status(200).send({ result });
};

module.exports = { getAll, create };