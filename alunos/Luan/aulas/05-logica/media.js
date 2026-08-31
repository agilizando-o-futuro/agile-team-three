function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}

function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

const nota1 = 8;
const nota2 = 6;
const nota3 = 7;

const media = calcularMedia(nota1, nota2, nota3);
const situacao = verificarSituacao(media);

console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
console.log(`Média: ${media.toFixed(1)}`);
console.log(`Situação: ${situacao}`);

console.log("\n--- Outro teste ---");
const media2 = calcularMedia(4, 3, 5);
console.log(`Notas: 4, 3, 5`);
console.log(`Média: ${media2.toFixed(1)}`);
console.log(`Situação: ${verificarSituacao(media2)}`);

console.log("\n--- Mais um ---");
const media3 = calcularMedia(6, 5, 4);
console.log(`Notas: 6, 5, 4`);
console.log(`Média: ${media3.toFixed(1)}`);
console.log(`Situação: ${verificarSituacao(media3)}`);