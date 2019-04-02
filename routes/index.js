var express = require('express');
var router = express.Router();
let frontController = require('../controllers/frontendController')
let backController = require('../controllers/backendController')

/* frontend routes */
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



// backend routes
router.get('/login', backController.loginPage);
router.get('/forgot_password', backController.forgotPassPage);
router.get('/dashboard', backController.dashboardPage);
router.get('/dashboard_videos', backController.videosPage);
router.get('/dashboard_fashion', backController.fashionPage);
router.get('/dashboard_covers', backController.coversPage);
router.get('/dashboard_shop', backController.shopPage);
router.get('/dashboard_about', backController.aboutPage);
router.get('/dashboard_changeEmail', backController.changeEmailPage);
router.get('/dashboard_changePass', backController.changePassPage);
router.get('/dashboard_deleteAcc', backController.deleteAccPage);

// the following routes will also accept variables in order to target a particular video ID
router.get('/dashboard_editVideo', backController.editVideoPage);
router.get('/dashboard_editFashion', backController.editFashionPage);
router.get('/dashboard_editShop', backController.editShopPage);
router.get('/dashboard_editCover', backController.editCoverPage);


module.exports = router;
