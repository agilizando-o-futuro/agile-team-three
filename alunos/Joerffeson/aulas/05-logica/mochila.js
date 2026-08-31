const itens = [
  { nome: "TV", peso: 30, valor: 3000 },
  { nome: "Sofá", peso: 50, valor: 5000 },
  { nome: "Geladeira", peso: 40, valor: 4000 },
  { nome: "Micro-ondas", peso: 20, valor: 1500 },
  { nome: "Bicicleta", peso: 15, valor: 2000 },
];

const capacidade = 80;

function resolverMochila(itens, capacidade) {
  let itensEscolhidos = [];
  let maiorValor = 0;
  let capacidadeAtual = capacidade;

  itens.sort((itemA, itemB) => {
    const razaoA = itemA.valor / itemA.peso;
    const razaoB = itemB.valor / itemB.peso;

    return razaoB - razaoA;
  });

  for (let i = 0; i < itens.length; i++) {
    let itemAtual = itens[i];

    if (itemAtual.peso <= capacidadeAtual) {
      itensEscolhidos.push(itemAtual);
      maiorValor += itemAtual.valor;
      capacidadeAtual -= itemAtual.peso;
    }
  }
  return {
    itens: itensEscolhidos,
    valorTotal: maiorValor,
  };
}

const resultado = resolverMochila(itens, capacidade);
console.log("Itens:", resultado.itens);
console.log("Valor total: R$", resultado.valorTotal);
