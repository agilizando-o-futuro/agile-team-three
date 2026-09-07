const n1 = 3;
const n2 = 6;
const n3 = 3;

const resultado = calcularMedia(n1, n2, n3);

function calcularMedia(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;
  let status = "";

  if (media >= 7) {
    status = "Aprovado";
  } else if (media >= 5) {
    status = "Recuperação";
  } else {
    status = "Reprovado";
  }
  console.log(`Média: ${media.toFixed(2)} - Status: ${status}`);
  return { media, status };
}
