const campoIdade = document.getElementById("idade");

campoIdade.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

document.getElementById("formIdade").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(campoIdade.value);
  const resultado = document.getElementById("resultado");

  if (nome === "" || campoIdade.value === "" || isNaN(idade)) {
    resultado.textContent = "Por favor, preencha todos os campos corretamente.";
    resultado.className = "menor";
    return;
  }

  if (idade < 0 || idade > 110) {
    resultado.textContent = "Por favor, insira uma idade válida (0 a 110).";
    resultado.className = "menor";
    return;
  }

  if (idade >= 18) {
    resultado.textContent = `${nome}, você é maior de idade (${idade} anos).`;
    resultado.className = "maior";
  } else {
    resultado.textContent = `${nome}, você é menor de idade (${idade} anos).`;
    resultado.className = "menor";
  }
});
