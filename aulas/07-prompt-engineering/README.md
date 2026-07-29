# Aula 02 — Prompt Engineering

## Objetivos
- Entender o que é um prompt e seus componentes
- Aprender técnicas para escrever prompts eficazes
- Conhecer o papel do system prompt vs user prompt
- Praticar iteração de prompts

## Componentes de um Prompt

| Componente | Descrição |
|------------|-----------|
| **Contexto** | Informação de fundo relevante para a tarefa |
| **Instrução** | O que você quer que o modelo faça |
| **Formato** | Como deve ser a saída (JSON, lista, código) |
| **Exemplos** | Demonstração do resultado esperado (few-shot) |
| **Restrições** | Limitações (tom, tamanho, o que evitar) |

## Técnicas

### 1. Seja específico
❌ "Me ajuda com JavaScript"  
✅ "Preciso de uma função em JavaScript que filtre um array de objetos por uma propriedade e retorne os valores únicos"

### 2. Dê formato de saída
```
Explique o conceito de closure em JavaScript.
Formato: { "conceito": "...", "exemplo": "...", "analogia": "..." }
```

### 3. Cadeia de pensamento (Chain-of-Thought)
Peça para o modelo "pensar passo a passo" antes de responder.

### 4. Role prompting
Defina um papel para o modelo: "Você é um revisor de código sênior..."

## Atividade Prática

1. Use o `tutor-ia` para refinar um prompt que você escreveu
2. Compare respostas de prompts vagos vs prompts específicos
3. Crie um system prompt para um assistente de código

```bash
opencode "tutor-ia" "Me ajude a criar um prompt para gerar uma calculadora em HTML/CSS/JS. Quero saída em arquivos separados."
```

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Salve os prompts que você criou
mkdir -p alunos/seu-nome/aulas/07-prompts
# Adicione: prompt-vago.txt, prompt-especifico.txt, system-prompt.txt

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 07 - prompt engineering"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
