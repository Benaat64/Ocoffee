const express = require('express');
const mainController = require('./controllers/mainController.js');
const filtreController = require('./controllers/filtreController.js');
const router = express.Router();

router.get('/', mainController.recentCoffees),

router.get('/catalogue',mainController.allCoffees)
router.get('/filtre',filtreController.allCategory)

router.get('/produit/:id',mainController.OneCoffe),




module.exports = router;