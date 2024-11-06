const Product = require("../../model/products.model")    

module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: false
    });
    const newProducts = products.forEach(item => {
        item.priceNew = (item.price*(100-item.discountPercentage)/100).toFixed(0);
        return item;
    })

    res.render("clients/pages/products/index.pug",{
        pageTitle: "Trang sản phẩm",
        products: newProducts,
    });
}