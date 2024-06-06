const express = require('express');
const mainController = require('./controllers/mainController.js');
const filtreController = require('./controllers/filtreController.js');
const cartController = require('./controllers/cartController.js');
const router = express.Router();

router.get('/', mainController.recentCoffees),

router.get('/catalogue',mainController.allCoffees)
router.get('/filtre',filtreController.allCategory)
router.get('/produit/:id',mainController.OneCoffe),
router.get('/about',mainController.about)
router.get('/panier',cartController.cartPage)
router.get('/panier/add/:id',cartController.cartsAdd);
router.get('/panier/delete/:id',cartController.cartsDelete)




module.exports = router;