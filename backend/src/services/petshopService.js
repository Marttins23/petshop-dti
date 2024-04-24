const petshops = {
  'Meu Canino Feliz': { distancia: 2, diasUteis: { pequeno: 20, grande: 40 }, finalDeSemana: { pequeno: 24, grande: 48 } },
  'Vai Rex': { distancia: 1.7, diasUteis: { pequeno: 15, grande: 50 }, finalDeSemana: { pequeno: 20, grande: 55 } },
  'ChowChawgas': { distancia: 0.8, diasUteis: { pequeno: 30, grande: 45 }, finalDeSemana: { pequeno: 30, grande: 45 } }
};
  
exports.calcularMelhorOpcao = (data, caesPequenos, caesGrandes) => {
  const diaDaSemana = new Date(data).getDay();
  const ehFinalDeSemana = (diaDaSemana === 5) || (diaDaSemana === 6);
  let custoMinimo = Infinity;
  let melhorPetshop = null;

  for (const [nome, dados] of Object.entries(petshops)) {
    const precos = ehFinalDeSemana ? dados.finalDeSemana : dados.diasUteis;
    const custoTotal = precos.pequeno * caesPequenos + precos.grande * caesGrandes;

    if (custoTotal < custoMinimo || (custoTotal === custoMinimo && dados.distancia < petshops[melhorPetshop].distancia)) {
      custoMinimo = custoTotal;
      melhorPetshop = nome;
    }
  }

  return { melhorPetshop, custoMinimo };
};