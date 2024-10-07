const express = require('express');
const backup = require('./backend/config/backup');
const cron = require('node-cron');
const routes = require('./backend/routes/router');
const logger = require('morgan');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views'));
app.use(express.static(path.join(__dirname, 'frontend/views/static')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routes);

app.listen(process.env.PORT);
cron.schedule(' * * * * *', async()=> {
    console.log('backup');
    backup.backupDatabase()
})