const mongoose =  require('mongoose')
const conexion = require("../config/database");
const favoritos = new mongoose.Schema({
    hotelID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'El ID del hotel es obligatorio'],
        ref: "hotel"
    }
})

const schemaUsuario = new conexion.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'el nombre es obligatorio'],
    },
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
    },
    telefono:{
        type: Number,
    },
    fotoPerfil: {
        type: String,
    },
    favoritos: [favoritos],
},{
versionKey: false})

const modeloUsuarios = conexion.model("usuarios", schemaUsuario);
module.exports = modeloUsuarios;
