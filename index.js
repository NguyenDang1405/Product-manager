const express = require('express');
const database = require('./config/database');
const route = require('./routers/clients/index.route.js');
const routeAdmin = require('./routers/admin/index.router.js');
require("dotenv").config();
const app = express()
const port = process.env.PORT;

database.connect();
app.set('views','./views')
app.set('view engine','pug')
app.use(express.static("public"));

route(app);
routeAdmin(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});



