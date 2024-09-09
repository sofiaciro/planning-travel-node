const express = require('express');
const routes = require('./backend/routes/router');
const logger = require('morgan');
const path = require('path');

const methodOverride = require('method-override');

require('dotenv').config();

const app = express();
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views'));
app.use(express.static(path.join(__dirname, 'frontend/views/assets')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', routes);

app.listen(process.env.PORT);