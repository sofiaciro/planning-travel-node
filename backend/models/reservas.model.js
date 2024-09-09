const mongoose =  require('mongoose')
const conexion = require("../config/database");

const schemaReserva = new conexion.Schema({
    habitacionId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'El ID de la habitacion es obligatorio'],
        ref: "habitacion"
    },
    usuario: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'El usuario es obligatorio'],
        ref: 'usuario'
    },
    fechaLlegada: {
        type: Date,
    },
    fechaSalida: {
        type: Date,
    },
    cantidadHuespedes:{
        type: Number,
        required: [true,'La cantidad de huespedes es obligatoria'],
        minLength: 0,
    },
    estadoReseva: {
        type: String,
        enum:['reservado','pagado','cancelado','finalizado'],
        default: 'reservado',
    },
    fechaRealizacion: {
        type: Date,
        default: Date()
    },
    precio: {
        type: Number,
        required: [true, 'El precio de la reserva es obligatorio'],
        minLength: 0,
    },
})

const modeloReservas = conexion.model("reservas", schemaReserva);
module.exports = modeloReservas;