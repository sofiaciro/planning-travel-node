const mongoose =  require('mongoose')
const conexion = require("../config/connection");
const categoria = new mongoose.Schema({
    nombre:{
        type: String, 
        required: [true,'El nombre de la categoria es obligatorio'],
        trim: true
    },
    descripcion:{
        type: String,
        required: [true, 'La descripción de la categoria es obligatoria'],
        trim: true,
        maxLength: [150, 'la descripción es muy extensa'],
    }
})
const servicios = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre del servicio es obligatorio'],
    }
})
const opiniones = new mongoose.Schema({
    usuario:{
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'el usuario en opiniones es obligatorio'],
        ref: 'usuario'
    },
    contenido:{
        type: String,
        maxLength: [300, 'la contenido es muy extenso'],
        trim: true,
    },
    fechaOpinion:{
        type: Date,
        default: Date(),
    },
    puntuacion:{
        type: Number,
        maxLength: [5, 'La puntuación debe ser como máximo 5.'],
        minLength: [1, 'La puntuación debe ser como mínimo 1.'],
    }
})

const schemaHotel = new conexion.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'El nombre del hotel es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del hotel es obligatoria'],
        trim: true,
        maxLength: [150, 'la descripción es muy extensa'],
    },
    direccion: {
        type: String,
        trim: true,
        required: [true, 'La dirección del hotel es obligatoria'],
    },
    categoria: {
        type: categoria,
    },
    ciudad:{
        type: String,
        trim: true,
        required: [true, 'La ciudad del hotel es obligatoria'],
    },
    servicios: [servicios],
    opiniones: [opiniones],
    fotos: {
        type: String,
        required: [true, 'No existe imagen o ruta por defecto'],
    },
},{
versionKey: false})

const modeloHoteles = conexion.model("hoteles", schemaHotel);
module.exports = modeloHoteles;
