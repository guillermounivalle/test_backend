const express = require('express');
const morgan = require('morgan');
const path = require('path');

const cors = require('cors'); //Permite la conexión entre dos servidores (Front-end y Back-end);


const app = express();


// Settings 
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors()); //Cada petición que llegue podrá enviar y recibir datos
app.use(morgan('dev'));
app.use(express.json());



// Routes
app.use('/api/countries', require('./routes/countries'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

module.exports = app;