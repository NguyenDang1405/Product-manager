const express = require('express');
const Router = express.Router();

const controller = require("../../controllers/admin/dashboard.controller.js")
Router.get("/",controller.dashboard)
module.exports = Router;

