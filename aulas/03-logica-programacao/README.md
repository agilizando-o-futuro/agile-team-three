# Aula 03 — Lógica de Programação com HTML, CSS e JavaScript

## Objetivos
- Entender estrutura de uma página web (HTML)
- Estilizar com CSS (seletores, box model, flexbox, grid)
- Aprender lógica de programação com JavaScript
- Manipular o DOM e eventos

## HTML — Estrutura

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Página</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Título</h1>
  <p>Parágrafo</p>
  <button id="meuBotao">Clique</button>
  <script src="script.js"></script>
</body>
</html>
```

### Tags essenciais
| Tag | Função |
|-----|--------|
| `h1` a `h6` | Títulos |
| `p` | Parágrafo |
| `a` | Link |
| `img` | Imagem |
| `div` | Divisão/container |
| `ul / ol / li` | Listas |
| `table / tr / td` | Tabelas |
| `form / input / button` | Formulários |

## CSS — Estilização

### Seletores
```css
/* Tag */
h1 { color: blue; }

/* Classe */
.destaque { font-weight: bold; }

/* ID */
#titulo { font-size: 24px; }
```

### Box Model
```
┌────────── margin ──────────┐
│  ┌─────── border ───────┐ │
│  │  ┌─── padding ───┐   │ │
│  │  │   content      │   │ │
│  │  └───────────────┘   │ │
│  └──────────────────────┘ │
└───────────────────────────┘
```

### Flexbox (layout moderno)
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
```

### Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

### Responsividade
```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

## JavaScript — Lógica

### Variáveis e tipos
```javascript
let nome = "João";          // string
const idade = 25;           // number
let ativo = true;           // boolean
let frutas = ["maçã", "banana"];  // array
let pessoa = { nome: "João", idade: 25 };  // objeto
```

### Condicionais
```javascript
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// switch
switch (dia) {
  case 1: console.log("Domingo"); break;
  case 2: console.log("Segunda"); break;
}
```

### Laços
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let fruta of frutas) {
  console.log(fruta);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Funções
```javascript
function soma(a, b) {
  return a + b;
}

// Arrow function
const dobro = (x) => x * 2;
```

### Manipulação do DOM
```javascript
// Selecionar elementos
const titulo = document.querySelector("h1");
const botoes = document.querySelectorAll(".btn");
const paragrafo = document.getElementById("texto");

// Alterar conteúdo
titulo.textContent = "Novo título";
titulo.innerHTML = "<span>Novo</span>";

// Alterar estilo
titulo.style.color = "red";
titulo.classList.add("destaque");
titulo.classList.remove("oculto");

// Criar elementos
const div = document.createElement("div");
div.textContent = "Novo elemento";
document.body.appendChild(div);
```

### Eventos
```javascript
const btn = document.querySelector("button");
btn.addEventListener("click", function(event) {
  alert("Clicou!");
});

// Eventos comuns: click, submit, keydown, mouseover, change
```

### Requisições (fetch)
```javascript
fetch("https://api.github.com/users/octocat")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/await
async function buscarDados() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

## Atividade Prática

Crie uma página com:
1. Um formulário que pergunta nome e idade
2. Ao clicar em "Enviar", valide se a idade é número
3. Exiba "Maior" ou "Menor" de idade dinamicamente
4. Estilize com CSS (cores, espaçamento, responsivo)
5. Publique no GitHub Pages

```bash
opencode "tutor-js" "Me ajude a validar um formulário: quero que o campo idade só aceite números"
```

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Salve os arquivos na sua pasta
mkdir -p alunos/seu-nome/aulas/03-logica
# Adicione: index.html, style.css, script.js

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 03 - lógica de programação"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
