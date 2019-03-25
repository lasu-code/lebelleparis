exports.loginPage = (req, res) => {
    res.render('backend/login', {});
}

exports.dashboardPage = (req, res) => {
    res.render('backend/dashboard', {});
}

exports.videosPage = (req, res) => {
    res.render('backend/videos', {});
}

exports.fashionPage = (req, res) => {
    res.render('backend/fashion', {});
}

exports.coversPage = (req, res) => {
    res.render('backend/covers', {});
}

exports.shopPage = (req, res) => {
    res.render('backend/shop', {});
}

exports.aboutPage = (req, res) => {
    res.render('backend/about', {});
}

exports.changeEmailPage = (req, res) => {
    res.render('backend/changeEmail', {});
}

exports.changePassPage = (req, res) => {
    res.render('backend/changePass', {});
}

exports.deleteAccPage = (req, res) => {
    res.render('backend/deleteAcc', {});
}

exports.editVideoPage = (req, res) => {
    res.render('backend/editVideo', {});
}

exports.editFashionPage = (req, res) => {
    res.render('backend/editFashion', {});
}

exports.editShopPage = (req, res) => {
    res.render('backend/editShop', {});
}

exports.editCoverPage = (req, res) => {
    res.render('backend/editCover', {});
}