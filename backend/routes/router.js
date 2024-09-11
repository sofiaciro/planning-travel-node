const express = require('express');
//const controllerClientes = require('../controller/clientes.controller');
//const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');
//const stripe = require("stripe")(process.env.STRIPEKEY);
const route = express.Router();

// Index
route.get("/index", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/index');
});
// Dueño
route.get("/duenoHoy", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/hotel/dueno/duenoHoy');
});










module.exports = route
