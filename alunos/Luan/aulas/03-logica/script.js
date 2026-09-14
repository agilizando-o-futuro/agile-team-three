const form = document.getElementById("form-idade");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value, 10);

  if (nome === "" || isNaN(idade) || idade < 0) {
    resultado.textContent = "Preencha todos os campos corretamente.";
    resultado.className = "";
    return;
  }

  resultado.textContent = `${nome} é `;
  const span = document.createElement("span");

  if (idade >= 18) {
    span.textContent = "Maior de idade";
    span.className = "maior";
  } else {
    span.textContent = "Menor de idade";
    span.className = "menor";
  }

  resultado.appendChild(span);
});

form.addEventListener("input", function () {
  resultado.textContent = "";
});