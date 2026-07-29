# Agile Team Three

Repositório de ensino — Desenvolvimento de Software com IA e Agentes.

## Curso Completo

### Módulo 1 — Fundamentos (Aulas 01–05)

| Aula | Tema |
|------|------|
| 01 | Setup do Ambiente (WSL, Linux, VS Code, Docker, Node.js) |
| 02 | Git e GitHub (controle de versão, branches, GitHub Pages) |
| 03 | Lógica de Programação (HTML, CSS, JavaScript, DOM, eventos) |
| 04 | Metodologias Ágeis (Scrum, Kanban, Manifesto Ágil) |
| 05 | Raciocínio Lógico (algoritmos, fluxogramas, lógica proposicional) |

### Módulo 2 — IA e Agentes (Aulas 06–10)

| Aula | Tema |
|------|------|
| 06 | Introdução à IA no Desenvolvimento (LLMs, ciclo dev) |
| 07 | Prompt Engineering (técnicas, system prompt, few-shot) |
| 08 | Agentes de IA (ReAct, tools, function calling) |
| 09 | Usando IA no Código (gerar, revisar, refatorar) |
| 10 | Projeto Final — SGB (Laravel, Inertia, React, API, Moodle) |

## Projetos Práticos

| Projeto | Descrição |
|---------|-----------|
| 01 — Calculadora Inteligente | Calculadora + LLM para explicar passos |
| 02 — Chatbot Simples | Interface de chat com API LLM |
| 03 — Gerenciador de Tarefas | CRUD + agente de sugestões |
| 04 — SGB — Agilizando o Futuro | Laravel + Inertia + React + API + integração Moodle |

## Agentes opencode

Este repositório usa o [opencode](https://opencode.ai) com agentes configurados em `.opencode/agents.json`:

| Agente | Função | Quando usar |
|--------|--------|-------------|
| `professor` | Explica conceitos de forma didática | Aprender algo novo |
| `tutor-js` | Ajuda com JavaScript, React, HTML, CSS | Implementar/debugar |
| `tutor-laravel` | Ajuda com Laravel, Eloquent, Inertia, Sanctum, filas, testes | Desenvolver o backend |
| `tutor-ia` | Auxilia com prompts, APIs LLM, agentes | Integrar IA |
| `revisor` | Revisa código e sugere melhorias | Antes de entregar |

```bash
opencode "professor" "Explique o que é um LLM"
opencode "tutor-js" "Como usar flexbox para centralizar um elemento?"
opencode "tutor-laravel" "Como criar uma migration com relacionamento belongsTo?"
opencode "revisor" "Revise meu código: ..."
```

## Estrutura do Repositório

```
agile-team-three/
├── .opencode/agents.json   ← Configuração dos agentes
├── aulas/                  ← 10 aulas com teoria + prática
├── projetos/               ← 4 projetos com especificações
├── guias/                  ← Como usar agentes + boas práticas
├── exercicios/             ← Desafios de prompt + padrões de agentes
└── respostas/              ← Gabaritos do professor (ignorado pelo git)
```

## Pré-requisitos

- WSL (Windows) ou Linux
- VS Code com extensões recomendadas
- Git e conta no GitHub
- Node.js (via nvm)
- PHP 8.3+ e Composer
- PostgreSQL
- Docker
- opencode CLI

## Como Começar

```bash
git clone <url-do-repositorio>
cd agile-team-three
opencode "professor" "Por onde devo começar?"
```
