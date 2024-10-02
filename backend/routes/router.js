const express = require('express');
const controllerHoteles = require('../controller/hoteles.controller'); // Asegúrate de que la ruta es correcta
const controllerClientes = require('../controller/clientes.controller'); // Verifica las rutas de todos los controladores
const controllerHabitaciones = require('../controller/habitaciones.controller');
const controllerReservas = require('../controller/reservas.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');
const uploadPhoto = require('../utils/uploadPhoto');
const multer = require('multer');
//const stripe = require("stripe")(process.env.STRIPEKEY);
const route = express.Router();

// Index
route.get("/index", async (req, res) => {
    const hoteles = await controllerHoteles.hotelListar()
    res.render('pages/index', { hoteles });
});
// Hoteles
route.get('/hoteles', async (req, res) => {
    const hoteles = await controllerHoteles.hotelListar()
    res.render('pages/hotel/hoteles', { hoteles });
}); 
route.post('/hoteles', controllerHoteles.crearHotel);
route.delete('/hoteles/:id', controllerHoteles.eliminarHotel);
route.post('/hoteles/:id', controllerHoteles.actualizarHoteles);
// Dueño
route.get("/duenoHoy", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/hotel/dueno/duenoHoy');
});
//Cliente
route.get("/clientes", async (req, res) => {
    const listadoClientes = await controllerClientes.clienteListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoClientes });
});
//Habitacion
route.get("/habitacion", async (req, res) => {
    const listadoHabitaciones = await controllerHabitaciones.habitacionListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoHabitaciones });
});
//Reserva
route.get("/reservas", async (req, res) => {
    const listadoReservas = await controllerReservas.reservaListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoReservas });
});
//Usuario
route.get("/usuario", async (req, res) => {
    const listadoUsuarios = await controllerUsuarios.usuarioListar()
    console.log(path.__dirname);
    res.render('pages/index', { listadoUsuarios });
});


module.exports = route;
