# Aula 03 — Agentes de IA

## Objetivos
- Entender o que são agentes de IA
- Conhecer o padrão ReAct (Reasoning + Acting)
- Aprender sobre tools/function calling
- Construir um agente simples em JavaScript

## O que é um Agente?

Um agente é um sistema que usa um LLM para **raciocinar** e **agir** — ele decide qual ferramenta usar, executa a ação, observa o resultado e decide o próximo passo.

```
Loop do Agente:
1. Recebe uma tarefa
2. LLM raciocina sobre o que fazer
3. Escolhe uma ferramenta (tool)
4. Executa a ferramenta
5. Observa o resultado
6. Repete até concluir
```

## Componentes

| Componente | Função |
|------------|--------|
| **LLM** | Cérebro do agente — raciocina e decide |
| **Prompts** | Instruções que definem o comportamento |
| **Tools** | Funções que o agente pode chamar (API, calculadora, busca) |
| **Memória** | Histórico da conversa/execução |

## Function Calling

APIs modernas de LLM permitem declarar funções que o modelo pode "chamar":

```javascript
const tools = [
  {
    name: "calcular",
    description: "Executa uma operação matemática",
    parameters: {
      type: "object",
      properties: {
        expressao: { type: "string" }
      }
    }
  }
];
```

## Agentes no opencode

Este repositório já tem agentes configurados em `.opencode/agents.json`:
- `professor` — explica conceitos
- `tutor-js` — ajuda com JavaScript
- `tutor-ia` — ajuda com IA/prompts
- `revisor` — revisa código

## Atividade Prática

```bash
opencode "professor" "Explique o padrão ReAct com uma analogia simples"
```

Depois, desenhe no papel o fluxo de um agente que responde perguntas sobre o clima (precisa de uma tool de busca e uma de localização).

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Salve os arquivos da atividade
mkdir -p alunos/seu-nome/aulas/08-agentes
# Adicione: fluxo-agente-clima.jpg|png (foto do desenho)

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 08 - agentes de IA"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
