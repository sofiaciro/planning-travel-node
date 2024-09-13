const express = require('express');
const controllerHoteles = require('../controller/hoteles.controlller'); // Asegúrate de que la ruta es correcta
const controllerClientes = require('../controller/clientes.controller'); // Verifica las rutas de todos los controladores
const controllerHabitaciones = require('../controller/habitaciones.controller');
const controllerReservas = require('../controller/reservas.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');
//const stripe = require("stripe")(process.env.STRIPEKEY);

const route = express.Router();

route.get("/index", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/index');
});

// Hoteles
route.get('/hoteles', controllerHoteles.hotelListar); // Verifica que controllerHoteles.hotelListar esté definido
route.post('/hoteles', controllerHoteles.crearHotel); // Verifica que controllerHoteles.crearHotel esté definido
route.delete('/hoteles/:id', controllerHoteles.eliminarHotel);

// Dueño
route.get("/duenoHoy", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/hotel/dueno/duenoHoy');
});

module.exports = route;
