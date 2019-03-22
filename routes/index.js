var express = require('express');
var router = express.Router();
let frontController = require('../controllers/frontendController')

/* page routes */
router.get('/', frontController.indexPage);
router.get('/videos', frontController.videosPage);
router.get('/fashion', frontController.fashionPage);
router.get('/covers', frontController.coversPage);
router.get('/about', frontController.aboutPage);
router.get('/contact-us', frontController.contactusPage);
router.get('/shop', frontController.shopPage);

module.exports = router;
