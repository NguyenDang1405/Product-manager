module.exports.index = (req, res) => {
    res.render("clients/pages/Home/index.pug",{
      pageTitle: "Trang chủ"
    });
  }