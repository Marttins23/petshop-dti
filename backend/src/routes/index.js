const express = require('express');
const roteador = express.Router();
const petshopController = require('../controllers/petshopController');

roteador.post('/melhor-opcao', petshopController.encontrarMelhorOpcao);

module.exports = roteador;