const modeloHoteles = require("../models/hoteles.model");
const mongoose = require('mongoose');
const usuarioPorDefecto = new mongoose.Types.ObjectId('66e398dffde980cb2fdef0f6');

exports.hotelListar = async (req, res) => {
    const listadoHoteles = await modeloHoteles.find();
    res.render('pages/hoteles', { hoteles: listadoHoteles });
};
exports.crearHotel = async (req, res) => {
    const { nombre, descripcion, direccion, categoria, ciudad, servicios, opiniones, foto } = req.body;
    

    const nuevoHotel = new modeloHoteles({
        nombre,
        descripcion,
        direccion,
        categoria: {
            nombre: categoria,
            descripcion: 'Descripción de la categoría'  
        },
        ciudad,
        servicios: servicios ? servicios.map(servicio => ({ nombre: servicio })) : [],
        opiniones: opiniones ? [{
            usuario: usuarioPorDefecto, 
            contenido: opiniones,
            fechaOpinion: new Date(),
            puntuacion: 5
        }] : [],
        fotos: foto
    });

    try {
        await nuevoHotel.save();
        res.redirect('/hoteles');  
    } catch (error) {
        console.error('Error al crear el hotel:', error);
        res.status(500).send('Error al crear el hotel.');
    }
};

exports.actualizarHoteles = async (req, res) => {
    let servicios = req.body.servicios;
    if (!Array.isArray(servicios)) {
        servicios = [servicios];
    }

    const serviciosObjetos = servicios.map(servicio => ({
        nombre: servicio
    }));

    const hotelEditado = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        "categoria.nombre": req.body.nombreCategoria,
        "categoria.descripcion": req.body.descripcionCategoria,
        ciudad: req.body.ciudad,
        servicios: serviciosObjetos,
        fotos: req.body.foto
    };

    try {
        let Actualizacion = await modeloHoteles.findOneAndUpdate(
            { _id: req.params.id },
            { $set: hotelEditado },
            { new: true }
        );

        if (Actualizacion) {
            res.redirect('/hoteles');
        } else {
            res.status(404).json({ "mensaje": "Error al actualizar" });
        }
    } catch (error) {
        res.status(500).json({ "mensaje": "Error de servidor", error: error.message });
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