# Aula 04 — Metodologias Ágeis

## Objetivos
- Entender o que são metodologias ágeis e por que surgiram
- Conhecer o Manifesto Ágil e seus 4 valores
- Aprender os papéis, eventos e artefatos do Scrum
- Diferenciar Scrum de Kanban
- Aplicar mentalidade ágil no desenvolvimento de software

## Manifesto Ágil (2001)

### 4 Valores
1. **Indivíduos e interações** mais que processos e ferramentas
2. **Software funcionando** mais que documentação abrangente
3. **Colaboração com o cliente** mais que negociação de contratos
4. **Responder a mudanças** mais que seguir um plano

### 12 Princípios (resumo)
- Satisfazer o cliente com entregas rápidas e contínuas
- Aceitar mudanças de requisitos mesmo no fim do projeto
- Entregar software funcionando com frequência
- Equipe de negócios e desenvolvedores trabalham juntos
- Conversa face a face é a melhor forma de comunicação
- Software funcionando é a principal medida de progresso
- Desenvolvimento sustentável (ritmo constante)
- Excelência técnica e bom design
- Simplicidade é essencial
- Times auto-organizáveis
- Reflexão e ajuste do comportamento da equipe

## Scrum

### Papéis
| Papel | Responsabilidade |
|-------|------------------|
| **Product Owner (PO)** | Define o que fazer, prioriza o backlog |
| **Scrum Master (SM)** | Facilita o processo, remove impedimentos |
| **Time de Desenvolvimento** | Executa as tarefas, auto-organizado |

### Eventos (Time Boxed)
| Evento | Duração | Objetivo |
|--------|---------|----------|
| **Sprint** | 1-4 semanas | Ciclo de desenvolvimento |
| **Sprint Planning** | 2-4h | Planejar o que fazer na sprint |
| **Daily Scrum** | 15min | Sincronizar o time |
| **Sprint Review** | 1-2h | Mostrar o que foi feito |
| **Sprint Retrospective** | 1h | Melhorar o processo |

### Artefatos
| Artefato | Descrição |
|----------|-----------|
| **Product Backlog** | Lista priorizada de funcionalidades |
| **Sprint Backlog** | Itens selecionados para a sprint |
| **Incremento** | Versão funcional ao final da sprint |

## Kanban

| Conceito | Descrição |
|----------|-----------|
| **Quadro visual** | Colunas: A Fazer / Fazendo / Feito |
| **WIP (Work In Progress)** | Limite de tarefas simultâneas |
| **Fluxo contínuo** | Não tem sprints fixas |
| **Lead Time** | Tempo da entrada à entrega |

### Scrum vs Kanban

| Aspecto | Scrum | Kanban |
|---------|-------|--------|
| Ciclos | Sprints fixas | Fluxo contínuo |
| Papéis | PO, SM, Time | Sem papéis fixos |
| Priorização | Início da sprint | Contínua |
| Mudanças | Só entre sprints | A qualquer momento |

## Atividade Prática

1. Monte um quadro Kanban físico (post-its) ou digital (Trello) para organizar seus estudos
2. Divida em: A Fazer | Fazendo | Em Revisão | Feito
3. Adicione as tarefas das aulas anteriores como cards
4. Pratique a Daily: todo dia responda:
   - O que fiz ontem?
   - O que vou fazer hoje?
   - Tem algum impedimento?

```bash
opencode "professor" "Explique como aplicar Scrum em um projeto individual de estudos"
```

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Salve o print ou link do seu quadro
mkdir -p alunos/seu-nome/aulas/04-ageis
# Adicione: kanban.png (print) ou link.md com URL do Trello

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 04 - metodologias ágeis"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
