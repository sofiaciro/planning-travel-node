const modelCliente = require("../models/clientes.model")
exports.clienteListar = async (req,res) =>{
    let listadoCliente = await modelCliente.find();
    if(listadoCliente)
        return listadoCliente
    else
        res.status(404).json({"error": "No se encontraron usuario"});
};