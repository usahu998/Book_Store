const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
require('./config/db.connection');
const bodyParser = require('body-parser');
const router = require('./main/routes/routes');
const app = express();
app.use(expressValidator());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
