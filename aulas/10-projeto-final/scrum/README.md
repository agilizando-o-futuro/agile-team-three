# Aula 10.1 — Sprint Planning do Projeto Final (SGB)

> Hoje o time deixa de *estudar* Scrum e passa a *usar* Scrum para construir o
> **SGB — Sistema de Gestão de Bolsas** do Agilizando o Futuro.

## Objetivos da aula

Ao final da aula o time terá:

1. **Papéis definidos**: quem é PO, quem é Scrum Master e quem é o time de desenvolvimento
2. **Product Goal** escrito e combinado
3. **Product Backlog inicial** com user stories escritas pelo time e priorizadas pelo PO
4. **GitHub Project** configurado, com as histórias cadastradas como issues
5. **Sprint 1 planejada**: objetivo, histórias, tarefas e responsáveis
6. **Acordos do time** (Definition of Ready, Definition of Done, horário da daily, padrão de branch)

## Material de apoio (leia antes da aula)

| Arquivo | Para quem | Conteúdo |
|---------|-----------|----------|
| [papel-product-owner.md](papel-product-owner.md) | PO | Responsabilidades e roteiro do PO na aula |
| [papel-scrum-master.md](papel-scrum-master.md) | Scrum Master | Responsabilidades, roteiro e scripts de facilitação |
| [papel-time-dev.md](papel-time-dev.md) | Devs | Responsabilidades e roteiro do time de desenvolvimento |
| [user-stories.md](user-stories.md) | Todos | Quem escreve, como escrever, e o backlog inicial do SGB |
| [acordos-do-time.md](acordos-do-time.md) | Todos | DoR, DoD, branches, commits, PRs, daily |
| [github-project.md](github-project.md) | SM + PO | Passo a passo para montar o GitHub Project |
| [sprint-01.md](sprint-01.md) | Todos | Proposta da Sprint 1: objetivo, histórias e tarefas |
| [templates/](templates/) | Todos | Templates de issue (user story e task) |

## Quem é quem

| Papel no Scrum | Quem | Por quê |
|----------------|------|---------|
| **Product Owner** | **Webert** | É quem conhece o Agilizando o Futuro e as necessidades reais. Na sprint 1, o PO também serve de exemplo do papel para a turma |
| **Scrum Master** | **1 aluno, rodízio a cada sprint** | Todos passam pelo papel. Sugestão de ordem: Joerffeson → Thiago → Luan → Natanael |
| **Time de Desenvolvimento** | **Todos os alunos** (o SM também desenvolve) | Com 4 pessoas, ninguém pode ficar só facilitando |
| **Professor / Coach** | **Webert** | Fora do papel de PO, faz pausas didáticas ("congela a cena") para explicar o que está acontecendo |

> 💡 **Dica para o Webert:** quando for falar como professor, e não como PO,
> diga isso em voz alta: *"Agora estou falando como professor..."*. Assim os
> alunos não confundem o PO (que decide **o quê**) com o professor (que ensina **o como**).
> A partir da sprint 2, um aluno pode ser **PO assistente** e acompanhar você.

## Decisão importante antes da aula: um produto só ou um por aluno?

O [README da aula 10](../README.md) fala em entrega individual (`alunos/seu-nome/projetos/sgb`).
**Com Scrum, recomendo um único SGB construído pelo time inteiro**:

- Um backlog, um Project, uma sprint: é assim que funciona na vida real
- Os alunos treinam o que o Scrum mais exige: PR, code review, conflito de merge e integração
- A avaliação individual continua possível: cada um é avaliado pelas issues que fechou, pelos PRs e pelas revisões que fez

Onde fica o código: **recomendo um repositório novo `agilizando-o-futuro/sgb`**. Um projeto Laravel
inteiro dentro do repositório de aulas deixa tudo pesado e confuso. Se preferir não criar um
repositório novo, use a pasta `projetos/sgb/` neste mesmo repositório.

---

## Roteiro da aula (≈ 3h)

| Tempo | Bloco | Quem conduz | Resultado |
|-------|-------|-------------|-----------|
| 0:00 – 0:10 | 1. Abertura | Professor | Todos sabem o que vai acontecer hoje |
| 0:10 – 0:25 | 2. Papéis e acordos | Professor → SM | SM escolhido, acordos combinados |
| 0:25 – 0:50 | 3. Visão do produto | **PO** | Product Goal e épicos no quadro |
| 0:50 – 1:35 | 4. Workshop de user stories | **SM** facilita, **time** escreve, **PO** valida | Histórias escritas com critérios de aceite |
| 1:35 – 1:45 | ☕ Intervalo | — | — |
| 1:45 – 2:15 | 5. Refinamento e estimativa (Planning Poker) | **SM** | Histórias estimadas e priorizadas |
| 2:15 – 2:50 | 6. Sprint Planning | **SM** facilita, **PO** + **time** | Sprint Goal, Sprint Backlog e tarefas no Project |
| 2:50 – 3:00 | 7. Fechamento | Professor | Datas da daily, review e retro definidas |

### Bloco 1 — Abertura (10 min) · Professor

- Mostre o fluxo do SGB (WordPress → /inscrever → DB → Moodle → e-mail). Está no [README do projeto](../../../projetos/04-projeto-final/README.md)
- Diga a regra do dia: **"Hoje ninguém escreve código. Hoje decidimos O QUE vamos construir primeiro e POR QUÊ."**
- Relembre a aula 04 em 2 minutos: 3 papéis, 5 eventos, 3 artefatos

### Bloco 2 — Papéis e acordos (15 min) · Professor → Scrum Master

1. Explique a tabela "Quem é quem" acima
2. Peça um voluntário para ser o primeiro Scrum Master (se ninguém quiser, siga a ordem do rodízio)
3. **A partir daqui, o SM conduz a aula.** O professor só interrompe para pausas didáticas
4. O SM lê em voz alta os [acordos do time](acordos-do-time.md) e pergunta: "alguém quer mudar alguma coisa?"
5. Combinem a **duração da sprint**. Recomendo **1 semana**: o feedback é rápido e o ritmo acompanha as aulas

### Bloco 3 — Visão do produto (25 min) · Product Owner

Siga o roteiro em [papel-product-owner.md](papel-product-owner.md#bloco-3--visão-do-produto). Resumo:

1. Conte a história: quem é o Agilizando o Futuro e qual problema o SGB resolve
2. Apresente as 3 personas: **Visitante**, **Aluno** e **Admin/Coordenação**
3. Escreva o **Product Goal** no quadro
4. Apresente os **épicos**, os blocos grandes do sistema (lista em [user-stories.md](user-stories.md#épicos-do-sgb))
5. Abra 5 minutos para perguntas do time

### Bloco 4 — Workshop de user stories (45 min) · SM facilita, time escreve, PO valida

**Quem escreve as histórias? O time inteiro, junto com o PO.** Os detalhes estão em [user-stories.md](user-stories.md#quem-escreve-as-user-stories).

Dinâmica:

1. **(5 min)** O SM explica o formato: *Como [persona], quero [ação], para [benefício]* + critérios de aceite
2. **(20 min)** O time se divide em **2 duplas**. Cada dupla pega épicos:
   - Dupla A: Inscrição + Admin
   - Dupla B: Painel do Aluno + Integrações (Moodle/e-mail)
   - Cada dupla escreve de 3 a 5 histórias (post-it, Miro ou direto como issue no GitHub)
3. **(15 min)** Cada dupla lê suas histórias em voz alta. O PO responde se a história tem valor e se o texto está claro. O outro time aponta dúvidas
4. **(5 min)** O SM junta as histórias duplicadas e aponta as que estão grandes demais (épico disfarçado)

> O backlog em [user-stories.md](user-stories.md#backlog-inicial-proposto) é um **gabarito do professor**.
> Não mostre antes do workshop. Use depois para comparar e completar o que ficou faltando.

### Bloco 5 — Refinamento e estimativa (30 min) · Scrum Master

1. O PO ordena as histórias por prioridade (as mais importantes no topo)
2. Para as ~6 primeiras, o SM conduz o **Planning Poker** (Fibonacci: 1, 2, 3, 5, 8, 13)
   - Cada dev vota ao mesmo tempo (cartas, dedos ou [planningpokeronline.com](https://planningpokeronline.com))
   - Se os votos ficarem muito distantes (ex.: 2 e 13), quem votou mais alto e quem votou mais baixo explicam o motivo, e o time vota de novo
   - Histórias com **13 ou mais** devem ser quebradas
3. O time confere cada história contra a **Definition of Ready** e só as que passam podem entrar na sprint

### Bloco 6 — Sprint Planning (35 min) · SM facilita

Sprint Planning responde 3 perguntas (Scrum Guide 2020):

| Pergunta | Quem responde | Duração |
|----------|---------------|---------|
| **Por quê** essa sprint tem valor? → **Sprint Goal** | PO propõe, time ajusta | 10 min |
| **O quê** cabe na sprint? → histórias selecionadas | Time decide quanto cabe, PO confirma a prioridade | 10 min |
| **Como** vamos fazer? → tarefas técnicas e responsáveis | Time | 15 min |

- A proposta de Sprint 1 está em [sprint-01.md](sprint-01.md). O PO pode chegar com ela pronta, mas **o time é quem diz quanto cabe**
- O SM cadastra tudo no GitHub Project durante a reunião (passo a passo em [github-project.md](github-project.md))
- Cada tarefa precisa ter um responsável, e ninguém deve pegar mais de 2 tarefas "Em andamento" ao mesmo tempo

### Bloco 7 — Fechamento (10 min) · Professor

- Leia o Sprint Goal em voz alta. Todos concordam?
- Combine as datas:
  - **Daily**: 15 min, assíncrona no grupo do WhatsApp ou Discord todo dia até as 10h, ou síncrona nos dias de aula
  - **Sprint Review**: no início da próxima aula (30 min). O time mostra o software funcionando
  - **Retrospectiva**: logo depois da review (20 min)
- Tarefa para casa: cada um puxa sua primeira tarefa e abre a branch

---

## Checklist do professor (antes da aula)

- [ ] Decidir: repositório novo `agilizando-o-futuro/sgb` ou pasta `projetos/sgb/`
- [ ] Criar o repositório (se for o caso) e dar acesso de escrita aos 4 alunos
- [ ] Criar o GitHub Project vazio na organização (ver [github-project.md](github-project.md))
- [ ] Ler [papel-product-owner.md](papel-product-owner.md) e ensaiar a apresentação da visão (5 min)
- [ ] Separar post-its/canetas ou deixar um quadro Miro/FigJam aberto
- [ ] Ter as cartas de Planning Poker (ou um link online)
- [ ] Deixar o gabarito do backlog ([user-stories.md](user-stories.md)) aberto só no seu computador
