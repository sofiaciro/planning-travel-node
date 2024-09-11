// uploadPhoto.js
const fs = require('fs');
const path = require('path');
const supabase = require('../config/supabaseClient');
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

// Configura Multer para almacenar archivos en un directorio temporal


async function uploadPhoto(req, res) {
	//const fileName = path.basename(filePath);
	const filePath = path.join(__dirname, 'temp', req.file.filename);
	console.log(`ruta ${filePath}`);
	const file = fs.createReadStream(filePath);
	
	// Subir el archivo a Supabase
	const { data, error } = await supabase
	  .storage
	  .from('photos') // Nombre del bucket en Supabase
	  .upload(req.file.filename, file, {
		cacheControl: '3600',
		upsert: true
	  });
  
	if (error) {
	  return res.status(500).json({ error: error.message });
	}
/*
	const { data, error } = await supabase
		.storage
		.from('photos')
		.upload(fileName, file, {
		cacheControl: '3600',
		upsert: false
		});

	if (error) {
		console.error('Error uploading file:', error.message);
		return;
	}
*/
	const { publicURL, error: urlError } = supabase
		.storage
		.from('photos')
		.getPublicUrl(req.file.filename);

	if (urlError) {
		return res.status(500).json({ error: urlError.message });
	}
	fs.unlinkSync(filePath);
	console.log('File uploaded successfully:', data, publicURL);
	return {publicURL, data};
}

// Llama a la función con la ruta de la foto que deseas subir
// uploadPhoto('./path/to/your/photo.jpg');

module.exports = uploadPhoto;
