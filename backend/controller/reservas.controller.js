const modeloReservas = require("../models/reservas.model")
exports.reservaListar = async (req,res) =>{
    let listadoReservas = await modeloReservas.find();
    if(listadoReservas)
        return listadoReservas
    else
        res.status(404).json({"error": "No se encontraron usuario"});
};