const itens = [
  { nome: "TV", peso: 30, valor: 3000 },
  { nome: "Sofá", peso: 50, valor: 5000 },
  { nome: "Geladeira", peso: 40, valor: 4000 },
  { nome: "Micro-ondas", peso: 20, valor: 1500 },
  { nome: "Bicicleta", peso: 15, valor: 2000 },
];

const capacidade = 80;

function resolverMochila(itens, capacidade) {
  const totalCombinacoes = 1 << itens.length; // 2^5 = 32 combinações
  let melhorValor = 0;
  let melhorItens = [];
  let melhorPeso = 0;

  for (let mascara = 0; mascara < totalCombinacoes; mascara++) {
    let peso = 0;
    let valor = 0;
    let selecionados = [];

    for (let i = 0; i < itens.length; i++) {
      if (mascara & (1 << i)) {
        peso += itens[i].peso;
        valor += itens[i].valor;
        selecionados.push(itens[i].nome);
      }
    }

    if (peso <= capacidade && valor > melhorValor) {
      melhorValor = valor;
      melhorPeso = peso;
      melhorItens = selecionados;
    }
  }

  return {
    itens: melhorItens,
    valorTotal: melhorValor,
    pesoTotal: melhorPeso,
  };
}

const resultado = resolverMochila(itens, capacidade);
console.log("Itens:", resultado.itens);
console.log("Valor total: R$", resultado.valorTotal);
console.log("Peso total:", resultado.pesoTotal + "kg");