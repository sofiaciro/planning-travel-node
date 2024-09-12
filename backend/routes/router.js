const express = require('express');
const controllerClientes = require('../controller/clientes.controller');
const controllerHabitaciones = require('../controller/habitaciones.controller');
const controllerHoteles = require('../controller/hoteles.controller');
const controllerReservas = require('../controller/reservas.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
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
route.get("/clientes", async (req, res) => {
    const listadoClientes = await controllerClientes.clienteListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoClientes });
});
route.get("/habitacion", async (req, res) => {
    const listadoHabitaciones = await controllerHabitaciones.habitacionListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoHabitaciones });
});route.get("/hotel", async (req, res) => {
    const listadoHoteles = await controllerHoteles.hotelListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoHoteles });
});route.get("/reservas", async (req, res) => {
    const listadoReservas = await controllerReservas.reservaListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoReservas });
});route.get("/usuario", async (req, res) => {
    const listadoUsuarios = await controllerUsuarios.usuarioListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoUsuarios });
});










module.exports = route
