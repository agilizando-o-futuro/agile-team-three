# Aula 05 — Raciocínio Lógico

## Objetivos
- Entender o que é raciocínio lógico e sua importância na programação
- Conhecer lógica proposicional e operadores lógicos
- Aprender a criar algoritmos e fluxogramas
- Praticar problemas de lógica aplicados à programação

## O que é Raciocínio Lógico?

É a capacidade de organizar o pensamento para resolver problemas de forma estruturada. Na programação, é a base para escrever algoritmos claros e eficientes.

## Lógica Proposicional

### Operadores lógicos
| Operador | Símbolo | Exemplo | Resultado |
|----------|---------|---------|-----------|
| **E** | `&&` | `true && false` | `false` |
| **OU** | `\|\|` | `true \|\| false` | `true` |
| **NÃO** | `!` | `!true` | `false` |

### Tabela Verdade (E / AND)
| A | B | A && B |
|---|---|--------|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

### Tabela Verdade (OU / OR)
| A | B | A \|\| B |
|---|---|--------|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

## Algoritmos

### O que é um algoritmo?
Sequência finita de passos lógicos para resolver um problema.

### Exemplo: Algoritmo para fazer café
```
1. Pegue a garrafa térmica
2. Abra a tampa da garrafa
3. Coloque o pó no filtro
4. Aqueça a água
5. Despeje a água no filtro
6. Aguarde a água passar
7. Feche a garrafa
8. Sirva
```

### Representação: Fluxograma
```
      ┌──────────┐
      │  Início   │
      └────┬─────┘
           ▼
      ┌──────────┐
      │  Ler idade│
      └────┬─────┘
           ▼
      ┌──────────┐
      │ idade >= │
      │   18?    │───Não──► ┌────────────┐
      └────┬─────┘          │ "Menor de  │
           ▼ Sim            │  idade"    │
      ┌────────────┐         └────────────┘
      │ "Maior de  │
      │  idade"    │
      └────────────┘
           ▼
      ┌──────────┐
      │   Fim     │
      └──────────┘
```

## Problemas Práticos

### 1. Par ou Ímpar
```javascript
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
```

### 2. Fatorial
```javascript
function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
```

### 3. Sequência de Fibonacci
```javascript
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return a;
}
```

## Problema da Mochila (Knapsack) — Contexto Logístico

### Problema real
Uma transportadora precisa carregar um caminhão com capacidade máxima de **80 kg**. Ela tem os seguintes itens para entregar:

| Item | Peso (kg) | Valor (R$) |
|------|-----------|------------|
| TV | 30 | 3000 |
| Sofá | 50 | 5000 |
| Geladeira | 40 | 4000 |
| Micro-ondas | 20 | 1500 |
| Bicicleta | 15 | 2000 |

**Pergunta:** Quais itens levar para maximizar o valor total sem ultrapassar 80 kg?

### Raciocínio passo a passo

1. **Listar todas as combinações possíveis** (força bruta)
2. **Calcular peso total e valor total** de cada combinação
3. **Filtrar** as que excedem 80 kg
4. **Escolher** a de maior valor dentro do limite

### Solução manual (pensando em voz alta)

```
Combinações possíveis:
- TV + Sofá = 30+50 = 80kg → R$ 8000 ← melhor
- TV + Geladeira = 30+40 = 70kg → R$ 7000
- TV + Micro-ondas + Bicicleta = 30+20+15 = 65kg → R$ 6500
- Sofá + Micro-ondas = 50+20 = 70kg → R$ 6500
- Geladeira + Micro-ondas + Bicicleta = 40+20+15 = 75kg → R$ 7500
- Sofá + Bicicleta = 50+15 = 65kg → R$ 7000
- E assim por diante...
```

**Melhor escolha:** TV + Sofá = R$ 8000

### Implementação em JavaScript

Agora é com você! Implemente a função `resolverMochila(itens, capacidade)` que recebe um array de itens e retorna a combinação de maior valor dentro do peso limite.

```javascript
const itens = [
  { nome: "TV", peso: 30, valor: 3000 },
  { nome: "Sofá", peso: 50, valor: 5000 },
  { nome: "Geladeira", peso: 40, valor: 4000 },
  { nome: "Micro-ondas", peso: 20, valor: 1500 },
  { nome: "Bicicleta", peso: 15, valor: 2000 },
];

const capacidade = 80;

function resolverMochila(itens, capacidade) {
  // Seu código aqui
}

const resultado = resolverMochila(itens, capacidade);
console.log("Itens:", resultado.itens);
console.log("Valor total: R$", resultado.valorTotal);
```

Dica: use o operador `<<` para gerar combinações binárias. Teste com `1 << itens.length` para saber quantas combinações existem.

### Por que isso é importante para logística?

| Situação real | Aplicação do problema |
|--------------|----------------------|
| Caminhão com peso máximo | Mochila (capacidade) |
| Entregas com prioridades | Valor de cada item |
| Container com volume limitado | Mochila bidimensional |
| Roteirização de entregas | Mochila + restrições de rota |
| Carregamento de paletes | Variação 3D da mochila |

### Desafio extra
E se agora houver uma **restrição de volume**? O caminhão tem 60m³ e cada item ocupa um volume. Como adaptar a solução?

```bash
opencode "tutor-js" "Explique linha por linha como funciona o algoritmo de força bruta do problema da mochila"

opencode "professor" "Por que o problema da mochila é importante para sistemas de logística?"
```

## Exercícios de Raciocínio

### Fácil
1. Some todos os números de 1 a 100 (sem usar fórmula)
2. Inverta uma string: "hello" → "olleh"

### Médio
3. Verifique se uma palavra é palíndromo (lê-se igual de trás pra frente)
4. Encontre o maior número em um array

### Difícil
5. Implemente uma calculadora de IMC com classificação
6. Crie um algoritmo que valide CPF (lógica dos dígitos verificadores)

## Atividade Prática

1. Escreva no papel o algoritmo para trocar um pneu furado
2. Desenhe o fluxograma de uma calculadora de média escolar
3. Implemente em JavaScript: receba 3 notas, calcule a média, exiba "Aprovado" (≥7), "Recuperação" (≥5), "Reprovado"
4. Implemente o problema da mochila proposto nesta aula
5. Teste com diferentes valores

```bash
opencode "tutor-js" "Me ajude a implementar uma função que valida se uma string é palíndromo em JavaScript"
```

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Salve os arquivos na sua pasta
mkdir -p alunos/seu-nome/aulas/05-logica
# Adicione: media.js, mochila.js, fluxograma.png (ou link)

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 05 - raciocínio lógico"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
