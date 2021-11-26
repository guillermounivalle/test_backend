const express = require('express');
const router = express.Router();

const {getCountries} = require('../controllers/countries.controllers');


//Esta ruta hace referencia a /api/countries en app.js
router.route('/')
  .get(getCountries) //se llama desde el controlador.Esto genera orden


  //Exportando modulo
module.exports = router;