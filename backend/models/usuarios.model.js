const mongoose =  require('mongoose')
const conexion = require("../config/database");

const schemaUsuario = new conexion.Schema({
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        trim: true,
        unique: [true, 'el correo ya existe'],
    },
    password: {
        type: String,
        required: [true, 'la contraseña es obligatoria']
    },
    rol: {
        type: String,
        enum: ['cliente', 'dueño'],
        default: 'cliente'
    }
})

const modeloUsuario = conexion.model("usuario", schemaUsuario);
module.exports = modeloUsuario;