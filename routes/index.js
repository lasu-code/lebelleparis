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

//these two routes will actually take in a variable ID.
//I intentionally ignored it for now till I'm done with the frontend.
router.get('/singlepost', frontController.singlepostPage);  //the route will now be /singlepost/:_id
router.get('/singlevideo', frontController.singlevideoPage); //the route will now be /singlevideo/:_id

module.exports = router;
