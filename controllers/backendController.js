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
