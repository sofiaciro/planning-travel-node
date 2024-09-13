const express = require('express');
const controllerHoteles = require('../controller/hoteles.controller'); 
const controllerClientes = require('../controller/clientes.controller'); 
const controllerHabitaciones = require('../controller/habitaciones.controller');
const controllerReservas = require('../controller/reservas.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');


const route = express.Router();

route.get("/index", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/index');
});

// Hoteles
route.get('/hoteles', controllerHoteles.hotelListar); 
route.post('/hoteles', controllerHoteles.crearHotel);
route.delete('/hoteles/:id', controllerHoteles.eliminarHotel);
route.post('/hoteles/:id', controllerHoteles.actualizarHoteles);
// Dueño
route.get("/duenoHoy", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/hotel/dueno/duenoHoy');
});

module.exports = route;
