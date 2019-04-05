const path = require('path')
var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt-nodejs");
const passport = require("passport");
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
let User = require("../models/users");
let frontController = require('../controllers/frontendController')
let backController = require('../controllers/backendController')


var storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
    }
})

// FILE CHECK
function checkFileType(type) {
    return function (req, file, cb) {
        // Allowed ext
        let filetypes;
        if (type == "pdf") {
            filetypes = /pdf/;
        } else if (type == "images") {
            filetypes = /jpeg|jpg|png|gif/;
        }

        // Get ext
        const extname = file.mimetype.split('/')[1];

        // Check mime
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            req.flash('error', 'upload images only')
            cb(new Error(`Error Occured: Upload ${type.toUpperCase()} Only!`));
        }
    };
}

var upload = multer({ storage: storage, fileFilter: checkFileType("images") })


function checkLoginStatus(req, res, next) {
    if (req.isAuthenticated()) {
        username = req.user.email;
        return next();
    }

    req.flash('error', 'Login to continue');
    res.redirect('/signin');
}

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
router.get('/signup', backController.signupPage);
router.post("/signup", async (req,res) => {
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: (new User).generateHash(req.body.password),
        position: req.body.position
    };
    try {
        await User.create(newUser);
        console.log("success", "Account created successfully!");
    } catch (err) {
        showError(req, "POST", "/signup", err);
    }

    res.redirect("/dashboard");
});
router.get('/signin', backController.loginPage);
router.post('/signin', passport.authenticate('local.loginUser', {
    successRedirect: "/dashboard",
    failureRedirect: "/signin",
    failureFlash: true
}))


router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/signin");
});

// authorizing the following pages
// router.use('/dashboard',checkLoginStatus);
// router.use('/dashboard_videos', checkLoginStatus);
// router.use('/dashboard_fashion', checkLoginStatus);
// router.use('/dashboard_covers', checkLoginStatus);
// router.use('/dashboard_shop', checkLoginStatus);
// router.use('/dashboard_about', checkLoginStatus);
// router.use('/dashboard_changeEmail', checkLoginStatus);
// router.use('/dashboard_changePass', checkLoginStatus);
// router.use('/dashboard_deleteAcc', checkLoginStatus);

router.route("/forgot_password")
    // .all(checkLoginStatus)
    .get( async (req, res) => {
        try {
            res.render("backend/forgot");
        } catch (err) {
            showError(req, "GET", "dashboard/partners/add", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard")
    // .all(checkLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/dashboard", { activeNav: 'home' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_videos")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/videos", { activeNav: 'videos' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_fashion")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/fashion", { activeNav: 'fashion' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_covers")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/covers", { activeNav: 'covers' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_shop")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/shop", { activeNav: 'shop' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_about")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/about", { activeNav: 'about' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_changeEmail")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/changeEmail", { activeNav: '' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_changePass")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/changePass", { activeNav: '' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

router.route("/dashboard_deleteAcc")
    // .allcheckLoginStatus)
    .get(async (req, res) => {
        try {
            res.render("backend/deleteAcc", { activeNav: '' });
        } catch (err) {
            showError(req, "GET", "dashboard", err);
            res.redirect("/dashboard");
        }
    });

// the following routes will also accept variables in order to target a particular video ID
router.get('/dashboard_editVideo', backController.editVideoPage);
router.get('/dashboard_editFashion', backController.editFashionPage);
router.get('/dashboard_editShop', backController.editShopPage);
router.get('/dashboard_editCover', backController.editCoverPage);


module.exports = router;
