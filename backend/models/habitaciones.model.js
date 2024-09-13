const mongoose =  require('mongoose')
const conexion = require("../config/connection");

const schemaHabitacion = new conexion.Schema({
    hotelId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'El ID del hotel es obligatorio'],
        ref: "hotel"
    },
    numeroHabiitacion: {
        type: Number,
        required: [true, 'El numero de la habitacion es obligatorio'],
        trim: true,
        maxLength: 5,
        minLength: 1,
    },
    estadoHabitacion: {
        type: String,
        enum:['reservado','pagado','cancelado','finalizado'],
        default: 'reservado',
    },
    capacidadHuesped: {
        type: Number,
        required: [true, 'La capacidad de huespedes es obligatoria'],
        minLength: 1,
    },
    tipoHabitacion:{
        type: String,
        required: [true, 'El tipo de habitacion es obligatorio'],
    },
    comodidades: {
        type: String,
        required: [true, 'Las comodidades de la habitacion son obligatirias'],
    },
    precio: {
        type: Number,
        required: [true, 'El precio de la habitacion es obligatorio'],
        minLength: 0,
    },
},{
versionKey: false})

const modeloHabitaciones = conexion.model("habitaciones", schemaHabitacion);
module.exports = modeloHabitaciones;
