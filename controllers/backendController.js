exports.loginPage = (req, res) => {
    res.render('backend/login', {});
}

exports.forgotPassPage = (req, res) => {
    res.render('backend/forgot', {});
}

exports.dashboardPage = (req, res) => {
    res.render('backend/dashboard', { activeNav: 'home'});
}

exports.videosPage = (req, res) => {
    res.render('backend/videos', {activeNav: 'videos'});
}

exports.fashionPage = (req, res) => {
    res.render('backend/fashion', { activeNav: 'fashion'});
}

exports.coversPage = (req, res) => {
    res.render('backend/covers', { activeNav: 'covers'});
}

exports.shopPage = (req, res) => {
    res.render('backend/shop', { activeNav: 'shop'});
}

exports.aboutPage = (req, res) => {
    res.render('backend/about', { activeNav: 'about'});
}

exports.changeEmailPage = (req, res) => {
    res.render('backend/changeEmail', { activeNav: ''});
}

exports.changePassPage = (req, res) => {
    res.render('backend/changePass', {activeNav: ''});
}

exports.deleteAccPage = (req, res) => {
    res.render('backend/deleteAcc', {activeNav: ''});
}

exports.editVideoPage = (req, res) => {
    res.render('backend/editVideo', {activeNav: 'videos'});
}

exports.editFashionPage = (req, res) => {
    res.render('backend/editFashion', {activeNav: 'fashion'});
}

exports.editShopPage = (req, res) => {
    res.render('backend/editShop', {activeNav: 'shop'});
}

exports.editCoverPage = (req, res) => {
    res.render('backend/editCover', {activeNav: 'covers'});
}