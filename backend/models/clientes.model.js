const mongoose =  require('mongoose')
const conexion = require("../config/database");
const favoritos = new mongoose.Schema({
    hotelID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'El ID del hotel es obligatorio'],
        ref: "hotel"
    }
})

const schemaCliente = new conexion.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'el nombre es obligatorio'],
    },
    telefono:{
        type: Number,
    },
    fotoPerfil: {
        type: String,
    },
    favoritos: [favoritos],
},{
    versionKey: false
})


const modeloClientes = conexion.model("clientes", schemaCliente);
module.exports = modeloClientes;