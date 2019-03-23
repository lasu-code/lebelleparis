exports.indexPage = (req, res) => {
    res.render('frontend/index', {});
}

exports.videosPage = (req, res) => {
    res.render('frontend/videos', { });
}

exports.fashionPage = (req, res) => {
    res.render('frontend/fashion', {});
}

exports.coversPage = (req, res) => {
    res.render('frontend/covers', {});
}

exports.aboutPage = (req, res) => {
    res.render('frontend/about', {});
}

exports.contactusPage = (req, res) => {
    res.render('frontend/contact-us', {});
}

exports.shopPage = (req, res) => {
    res.render('frontend/shop', {});
}

exports.singlepostPage = (req, res) => {
    res.render('frontend/singlepost', {});
}

exports.singlevideoPage = (req, res) => {
    res.render('frontend/singlevideo', {  });
}