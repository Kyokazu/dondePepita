const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Product.controller');

router.get("/list", ProductController.getAll);
router.post("/create", ProductController.create);

module.exports = router;