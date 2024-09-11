const express = require('express');
//const controllerClientes = require('../controller/clientes.controller');
//const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');
const uploadPhoto = require('../utils/uploadPhoto');
const multer = require('multer');
//const stripe = require("stripe")(process.env.STRIPEKEY);

const storage = multer.diskStorage({
	destination: 'upload/',
	filename: (req, file, cb) => {
	  cb(null, file.originalname);
	},
  });

//const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const route = express.Router();

route.post('/upload', upload.single('foto'), async (req, res) => {
	const ruta = await uploadPhoto(req, res);
	console.log(ruta);
});

route.get('/index', (req, res) => {
	res.render('pages/index')
})








module.exports = route
