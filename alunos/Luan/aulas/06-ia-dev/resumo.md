# Aula 06 — Introdução à IA no Desenvolvimento

Resumo do que aprendi conversando com o agente `professor` e o `tutor-ia`.

## O que é um LLM e como ele é treinado?

Perguntei pro agente `professor` o que é um LLM. O que entendi:

- **LLM** = sigla em inglês pra Large Language Model (Modelo de Linguagem Grande).
- É um programa que foi treinado com **muito texto** (livros, sites, artigos) pra "aprender" como as palavras se combinam.
- Ele não pensa de verdade, ele **prevê a próxima palavra** com base no que já veio antes. Por isso parece tão natural.
- O treino é em duas fases principais:
  1. **Pré-treino** — o modelo lê um monte de texto e vai ajustando os "neurônios" (parâmetros) até conseguir prever bem as próximas palavras.
  2. **Ajuste fino (fine-tuning)** — depois que já sabe a língua, ele é treinado em tarefas específicas (responder, seguir instruções) e alinhado pra ser útil e seguro.
- Quanto mais parâmetros, maior o modelo, mas mais pesado pra rodar.

## Como usar uma API de LLM em JavaScript?

Conversei com o `tutor-ia` sobre fazer uma requisição pra API da OpenAI. A ideia principal:

- Você envia uma **requisição HTTP** (fetch) com o seu texto (prompt) e recebe uma resposta do modelo.
- A requisição precisa de uma **chave de API** (token) pra autenticar.
- A resposta vem em JSON, com o texto gerado dentro de um campo específico.

Exemplo simples que montamos, usando `fetch`:

```javascript
const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer SUA_CHAVE_AQUI",
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: "Explique o que é um LLM em uma frase" },
    ],
  }),
});

const dados = await resposta.json();
console.log(dados.choices[0].message.content);
```

O que ficou claro:

- Nunca colocar a chave no código que vai pro GitHub (vazar = qualquer um pode usar sua conta).
- A estrutura `messages` com `role` (user/assistant) é o padrão dessas APIs.
- Tenho que guardar a resposta dentro de `choices[0].message.content` (caminho que vem no JSON).

## Conclusão

Achei legal ver que dá pra usar um LLM direto do browser/backend com um simples `fetch`. O modelo é só mais uma API, e o que faz a diferença é como a gente monta o prompt.