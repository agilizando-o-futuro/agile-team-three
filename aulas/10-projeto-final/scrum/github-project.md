# Configurando o GitHub Project do SGB

> Quem faz: **SM + PO**. O ideal é o professor criar a estrutura **antes** da aula e o SM
> cadastrar as histórias **durante** a aula, com a tela compartilhada.

## 1. Criar o Project

Pela interface: **github.com/agilizando-o-futuro → Projects → New project → Board**
- Nome: `SGB — Agilizando o Futuro`
- Em **Settings → Manage access**, dê permissão de *Write* para os 4 alunos
- Vincule o repositório do SGB: **Settings → Linked repositories**

Pelo terminal (opcional):
```bash
gh auth refresh -s project            # dá ao gh permissão para Projects
gh project create --owner agilizando-o-futuro --title "SGB — Agilizando o Futuro"
gh project list --owner agilizando-o-futuro   # anote o número do project
```

## 2. Campos customizados

| Campo | Tipo | Valores |
|-------|------|---------|
| **Status** | Single select (já vem) | `Backlog` · `Pronto (Ready)` · `A Fazer` · `Fazendo` · `Em Revisão` · `Feito` |
| **Sprint** | **Iteration** | Duração de 1 semana, começando hoje |
| **Pontos** | Number | Fibonacci: 1, 2, 3, 5, 8, 13 |
| **Épico** | Single select | `E0 Fundação` · `E1 Inscrição` · `E2 Admin` · `E3 Painel Aluno` · `E4 Integrações` · `E5 API` · `E6 Entrega` |
| **Tipo** | Single select | `História` · `Tarefa` · `Bug` |

> O campo **Iteration** só pode ser criado pela interface web (Settings → + New field → Iteration).
> Os outros também podem ser criados pelo terminal:
```bash
P=<numero-do-project>
gh project field-create $P --owner agilizando-o-futuro --name "Pontos" --data-type NUMBER
gh project field-create $P --owner agilizando-o-futuro --name "Épico" --data-type SINGLE_SELECT \
  --single-select-options "E0 Fundação,E1 Inscrição,E2 Admin,E3 Painel Aluno,E4 Integrações,E5 API,E6 Entrega"
gh project field-create $P --owner agilizando-o-futuro --name "Tipo" --data-type SINGLE_SELECT \
  --single-select-options "História,Tarefa,Bug"
```

## 3. Views (abas)

| View | Layout | Configuração | Para quê |
|------|--------|--------------|----------|
| **📋 Sprint Atual** | Board | Filtro `sprint:@current`, colunas por Status | Daily e acompanhamento |
| **📚 Product Backlog** | Table | Filtro `-status:Feito`, ordenado manualmente, agrupado por Épico | Refinamento e priorização (PO) |
| **🗺️ Roadmap** | Roadmap | Por Sprint | Visão das sprints |
| **👤 Meus cards** | Board | Filtro `assignee:@me` | Cada dev vê o que é seu |

Na view **Sprint Atual**, configure o **limite de WIP** da coluna *Fazendo*
(menu da coluna → *Set limit* → 8, ou seja, 4 pessoas × 2).

## 4. Automações (Settings → Workflows)

Ative:
- ✅ *Item added to project* → Status = `Backlog`
- ✅ *Pull request merged* → Status = `Feito`
- ✅ *Item closed* → Status = `Feito`
- ✅ *Auto-add to project*: filtro `is:issue,pr` do repositório do SGB

## 5. Labels no repositório

```bash
REPO=agilizando-o-futuro/sgb
gh label create "user-story" --color 1D76DB --description "História de usuário" -R $REPO
gh label create "task"       --color C5DEF5 --description "Tarefa técnica"     -R $REPO
gh label create "bug"        --color D73A4A --description "Defeito"            -R $REPO --force
gh label create "bloqueado"  --color B60205 --description "Impedimento"        -R $REPO
gh label create "ia"         --color 7057FF --description "Usou IA na solução" -R $REPO
```

## 6. Templates de issue

Copie a pasta [templates/](templates/) para o repositório do SGB:
```bash
mkdir -p .github/ISSUE_TEMPLATE
cp <caminho>/templates/user-story.md .github/ISSUE_TEMPLATE/
cp <caminho>/templates/task.md       .github/ISSUE_TEMPLATE/
cp <caminho>/templates/pull_request_template.md .github/
```

## 7. Cadastrar as histórias (durante a aula)

Para cada história aprovada no workshop:
1. **New issue → User Story** (usa o template)
2. Preencha a história e os critérios de aceite
3. No painel lateral: Project = SGB, Épico, Pontos (depois do Poker)
4. As histórias da sprint 1: Sprint = `Sprint 1`, Status = `A Fazer`
5. As tarefas técnicas: crie como **sub-issues** da história (botão *Create sub-issue*)

Pelo terminal (mais rápido para o SM):
```bash
gh issue create -R agilizando-o-futuro/sgb \
  --title "US01 — Visitante se inscreve" \
  --label user-story \
  --project "SGB — Agilizando o Futuro" \
  --body-file us01.md
```

## 8. Milestone (opcional, mas ajuda)

Crie um milestone `Sprint 1`, com a data da próxima aula, e coloque o **Sprint Goal na descrição**.
Assim o objetivo aparece em toda issue da sprint.
```bash
gh api repos/agilizando-o-futuro/sgb/milestones \
  -f title="Sprint 1" \
  -f due_on="AAAA-MM-DDT23:59:59Z" \
  -f description="Um visitante consegue se inscrever pelo /inscrever, recebe um protocolo, e o admin vê essa inscrição na lista."
```

## Checklist final

- [ ] Project criado e alunos com acesso
- [ ] Campos: Status, Sprint, Pontos, Épico, Tipo
- [ ] Views: Sprint Atual, Product Backlog, Roadmap, Meus cards
- [ ] Automações ativadas
- [ ] Labels e templates no repositório
- [ ] Histórias da Sprint 1 com pontos, responsável e Sprint = Sprint 1
- [ ] Sprint Goal no milestone
