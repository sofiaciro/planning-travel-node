const modeloHoteles = require("../models/hoteles.model");
const mongoose = require('mongoose');

exports.hotelListar = async (req, res) => {
    const listadoHoteles = await modeloHoteles.find();
    return listadoHoteles
};
exports.crearHotel = async (req, res) => {
    const { nombre, descripcion, direccion, categoria, ciudad, servicios, opiniones, foto } = req.body;
    const usuarioPorDefecto = new mongoose.Types.ObjectId('66e398dffde980cb2fdef0f6');

    const nuevoHotel = new modeloHoteles({
        nombre,
        descripcion,
        direccion,
        categoria: {
            nombre: categoria,
            descripcion: 'Descripción de la categoría'  // Asigna una descripción por defecto si lo deseas
        },
        ciudad,
        servicios: servicios ? servicios.map(servicio => ({ nombre: servicio })) : [],
        opiniones: opiniones ? [{
            usuario: usuarioPorDefecto,  // Asigna el ObjectId por defecto
            contenido: opiniones,
            fechaOpinion: new Date(),
            puntuacion: 5
        }] : [],
        fotos: foto
    });

    try {
        await nuevoHotel.save();
        res.redirect('/hoteles');  // Cambia esto a la ruta que desees redirigir después de la creación
    } catch (error) {
        console.error('Error al crear el hotel:', error);
        res.status(500).send('Error al crear el hotel.');
    }
};

exports.eliminarHotel = async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await modeloHoteles.findByIdAndDelete(id);
        
        if (!resultado) {
            return res.status(404).send('Hotel no encontrado.');
        }

        res.status(200).send('Hotel eliminado con éxito.');
    } catch (error) {
        console.error('Error al eliminar el hotel:', error);
        res.status(500).send('Error al eliminar el hotel.');
    }
};