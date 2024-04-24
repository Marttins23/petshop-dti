const petshopService = require('../services/petshopService');

exports.encontrarMelhorOpcao = (req, res) => {
  const { data, caesPequenos, caesGrandes } = req.body;
  const melhorOpcao = petshopService.calcularMelhorOpcao(data, caesPequenos, caesGrandes);
  res.json(melhorOpcao);
};