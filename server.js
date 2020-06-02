const path = require('path');
const express  = require('express');
// static file compression middleware
const compress = require('compression');
// middleware that allows you to parse request body, json, etc.
const bodyParser = require('body-parser');
// middleware to allow the general use of PUT and DELETE verbs
const methodOverride = require('method-override');
// logging middleware
const morgan  = require('morgan');
// middleware to return X-Response-Time with a response
const responseTime = require('response-time');

var app = express();

const PORT = 1234;

app.use(morgan('dev'));
app.use(responseTime());

app.use(bodyParser());
app.use(methodOverride());

app.use(compress());

app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT);

console.log('server started on port: ', PORT);
