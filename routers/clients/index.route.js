const productRouters = require('./products.route');
const HomeRouters = require('./Home.route')
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render("clients/pages/Home/index.pug");
      });  
    app.use('/products',productRouters);
    app.use('/Home',HomeRouters);
}