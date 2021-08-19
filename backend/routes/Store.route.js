const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/Store.controller');

router.get('/list', StoreController.getAll);
router.post('/create', StoreController.create);

module.exports = router;