const modeloHoteles = require("../models/hoteles.model")
exports.hotelListar = async (req,res) =>{
    let listadoHoteles = await modeloHoteles.find();
    if(listadoHoteles)
        return listadoHoteles
    else
        res.status(404).json({"error": "No se encontraron usuario"});
};