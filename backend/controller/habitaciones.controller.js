const modeloHabitaciones = require("../models/habitaciones.model");
const modeloHoteles = require("../models/hoteles.model");
exports.habitacionListar = async (req,res) =>{
    let listadoHabitacion = await modeloHabitaciones.find({});
   
    if(listadoHabitacion)
        return listadoHabitacion
    else
        res.status(404).json({"error": "No se encontraron usuario"});
};
