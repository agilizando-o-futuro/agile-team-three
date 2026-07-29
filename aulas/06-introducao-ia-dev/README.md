# Aula 01 — Introdução à IA no Desenvolvimento de Software

## Objetivos
- Entender o que são Large Language Models (LLMs)
- Como LLMs são treinados e como funcionam
- O que é (e o que NÃO é) Inteligência Artificial
- Papel da IA no ciclo de desenvolvimento de software

## Conceitos

### O que é um LLM?
Um modelo de linguagem grande (LLM) é um tipo de IA treinada com bilhões de textos para prever e gerar texto com coerência. Exemplos: GPT (OpenAI), Claude (Anthropic), Llama (Meta).

### O que IA **não** faz
- Não "pensa" ou "raciocina" como humano
- Não tem intenção ou consciência
- Pode cometer erros com confiança (alucinações)

### IA no ciclo de desenvolvimento
| Fase | Como a IA ajuda |
|------|----------------|
| Planejamento | Brainstorm de ideias, análise de requisitos |
| Codificação | Geração de código, autocomplete, explicação |
| Testes | Geração de casos de teste, análise de cobertura |
| Revisão | Code review automatizado, detecção de bugs |
| Documentação | Geração de docs e comentários |

## Atividade Prática

Use o agente `professor` para perguntar sobre um conceito que você não entendeu:
```bash
opencode "professor" "O que é um LLM e como ele é treinado?"
```

Depois, converse com o `tutor-ia` para entender como usar uma API de LLM:
```bash
opencode "tutor-ia" "Como faço uma requisição para a API da OpenAI em JavaScript?"
```

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Salve o resumo da conversa
mkdir -p alunos/seu-nome/aulas/06-ia-dev
# Adicione: resumo.md com suas descobertas sobre LLMs

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 06 - introdução à IA"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
