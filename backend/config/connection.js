const mongoose = require('mongoose');
require('dotenv').config();

const URI =  `mongodb+srv://${process.env.USERBD}:${process.env.PASSBD}@adso2669736.5x7gsx9.mongodb.net/${process.env.BD}`
mongoose.connect(URI);

module.exports = mongoose;