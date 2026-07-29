# Projeto 03 — Gerenciador de Tarefas (com Agente)

## Descrição
Um gerenciador de tarefas (to-do list) completo, onde um **agente de IA** ajuda o usuário a organizar tarefas, sugerir prioridades e dar dicas de produtividade.

## Requisitos Funcionais
- [ ] CRUD completo: criar, listar, editar, excluir tarefas
- [ ] Campos: título, descrição, prioridade (alta/média/baixa), status (pendente/em andamento/concluída)
- [ ] Filtrar tarefas por status e prioridade
- [ ] Botão "Perguntar ao Agente" — envia contexto das tarefas para o LLM e retorna sugestões
- [ ] Persistência com localStorage

## Requisitos Técnicos
- Organização em múltiplos arquivos JS (modular)
- CSS com variáveis para tema
- Acessibilidade básica (aria-labels, foco visível)

## Entregáveis
- `index.html`
- `style.css`
- `js/app.js` (lógica principal)
- `js/storage.js` (localStorage)
- `js/agent.js` (comunicação com LLM)

## Sugestão de Uso dos Agentes

```bash
opencode "professor" "Como devo organizar o código de um to-do list em módulos JS?"

opencode "tutor-js" "Como usar localStorage para salvar e carregar tarefas?"

opencode "tutor-ia" "Como estruturar o prompt do agente para sugerir prioridades baseado nas tarefas?"

opencode "revisor" "Revise a organização do meu projeto"
```
