const itens = [
  { nome: "TV", peso: 30, valor: 3000 },
  { nome: "Sofá", peso: 50, valor: 5000 },
  { nome: "Geladeira", peso: 40, valor: 4000 },
  { nome: "Micro-ondas", peso: 20, valor: 1500 },
  { nome: "Bicicleta", peso: 15, valor: 2000 }
];

const capacidade = 80;

const dp = Array.from(
{ length: itens.length + 1 }, () => Array(capacidade + 1).fill(0)
)

for (let i = 1; i <= itens.length; i++) {
    const item = itens[i - 1];

    for ( let peso = 0; peso <= capacidade; peso++) {

        dp[i][peso] = dp[i - 1][peso];

        if (item.peso <= peso) {
            dp[i][peso] = Math.max(
                dp[i][peso],
                dp[i - 1][peso - item.peso] + item.valor
            );
        }
    }       
}

const valorMaximo = dp[itens.length][capacidade];
console.log(`Valor máximo que pode ser carregado: ${valorMaximo}`);
const itensSelecionados = [];
let pesoRestante = capacidade;

for(let i = itens.length; i > 0; i--) {
    if (dp[i][pesoRestante] !== dp[i - 1][pesoRestante]) {
        const item = itens[i - 1];
        itensSelecionados.push(item);
        pesoRestante -= item.peso;
    }
}

itensSelecionados.reverse();
itensSelecionados.forEach(item => {
    console.log(`- ${item.nome} (Peso: ${item.peso}, Valor: ${item.valor})`);
});
const pesoTotal = itensSelecionados.reduce(
    (total, item) => total + item.peso, 0);
console.log(`Peso total: ${pesoTotal}`);
console.log(`Valor total: ${valorMaximo}`);