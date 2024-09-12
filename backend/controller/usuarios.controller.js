const modelUsuario = require("../models/usuarios.model")
exports.usuarioListar = async (req,res) =>{
    let listadoUsuarios = await modelUsuario.find();
    if(listadoUsuarios)
        //res.status(200).json(listadoUsuarios);
        return listadoUsuarios
    else
        res.status(404).json({"error": "No se encontraron usuario"});
};