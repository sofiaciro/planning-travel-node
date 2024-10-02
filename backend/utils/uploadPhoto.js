// uploadPhoto.js
const fs = require('fs');
const path = require('path');
const supabase = require('../config/supabaseClient');
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

async function subirImagen(file) {
	const { data, error } = await supabase.storage.from('imagenes').upload(`imagenes/${file.name}`, file);
  
	if (error) {
		console.error('Error subiendo la imagen:', error);
		return null;
	}
  
	const url = supabase.storage.from('imagenes').getPublicUrl(data.path).publicURL;
	return url;
}

async function manejarSubidaDeImagenes(files) {
	const urls = [];

	for(const file of files) {
		const url = await subirImagen(file);
		if(url) {
			urls.push(url);
		}
	}

	return urls;
}

async function guardarHotelConFotos(datosHotel, files) {
	const urlsFotos = await manejarSubidaDeImagenes(files);

	const nuevoHotel = new datosHotel({
		...datosHotel,
		fotos: urlsFotos,
	});

	try {
		const resultado = await nuevoHotel.save();
		console.log(`Hotel guardado en MongoDB: ${resultado._id}`);
	} catch (error) {
		console.log(`Error guardando el hotel en MongoDB: ${error}`);
	}
}

module.exports = { subirImagen, manejarSubidaDeImagenes, guardarHotelConFotos };