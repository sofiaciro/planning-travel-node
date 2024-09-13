const express = require('express');
const controllerHoteles = require('../controller/hoteles.controller'); // Asegúrate de que la ruta es correcta
const controllerClientes = require('../controller/clientes.controller'); // Verifica las rutas de todos los controladores
const controllerHabitaciones = require('../controller/habitaciones.controller');
const controllerReservas = require('../controller/reservas.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');
//const stripe = require("stripe")(process.env.STRIPEKEY);
const route = express.Router();

// Index
route.get("/index", async (req, res) => {
    const hoteles = await controllerHoteles.hotelListar()
    res.render('pages/index', { hoteles });
});
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
// Hoteles
route.get('/hoteles', controllerHoteles.hotelListar); // Verifica que controllerHoteles.hotelListar esté definido
route.post('/hoteles', controllerHoteles.crearHotel); // Verifica que controllerHoteles.crearHotel esté definido
route.delete('/hoteles/:id', controllerHoteles.eliminarHotel);


module.exports = route;
