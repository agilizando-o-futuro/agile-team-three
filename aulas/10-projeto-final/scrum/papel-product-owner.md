# Papel: Product Owner (PO)

**Quem:** Webert (sprint 1). A partir da sprint 2, um aluno pode ser PO assistente.

## Em uma frase

O PO decide **o que** será construído e **em que ordem**, para gerar o máximo de valor
para o Agilizando o Futuro. O PO **não** decide **como** construir.

## Responsabilidades

| O PO faz | O PO **não** faz |
|----------|------------------|
| Define e comunica o **Product Goal** | Diz ao time como programar |
| Ordena o Product Backlog (prioridade) | Distribui tarefas para os devs |
| Garante que cada história tem **valor** e **critérios de aceite** claros | Muda o escopo da sprint no meio dela sem conversar com o time |
| Responde dúvidas de negócio durante a sprint (até 24h) | Estima as histórias (quem estima é o time) |
| Aceita ou recusa o que foi entregue na Sprint Review | Aceita história que não cumpre a Definition of Done |
| Diz **não** para o que não gera valor agora | — |

## Roteiro do PO na aula de hoje

### Antes da aula
- [ ] Revisar o [README do projeto SGB](../../../projetos/04-projeto-final/README.md)
- [ ] Revisar os épicos e o backlog-gabarito em [user-stories.md](user-stories.md)
- [ ] Ler a proposta de Sprint 1 em [sprint-01.md](sprint-01.md)
- [ ] Preparar a fala da visão (abaixo), com no máximo 5 minutos

### Bloco 3 — Visão do produto

**1. Contar a história (2 min)**, algo como:

> "Hoje o Agilizando o Futuro recebe inscrições para as bolsas por formulário solto e planilha.
> A coordenação perde tempo conferindo dados, criando conta no Moodle na mão e mandando
> e-mail um por um. O aluno não sabe em que pé está a inscrição dele. O SGB resolve isso:
> o aluno se inscreve sozinho, a coordenação aprova em um painel, e a conta no EAD
> e o e-mail de boas-vindas saem automaticamente."

**2. Personas (3 min)**

| Persona | Quem é | O que mais importa para ela |
|---------|--------|-----------------------------|
| **Visitante** | Jovem que chegou pelo site agilizandoofuturo.org | Se inscrever rápido, pelo celular, sem erro |
| **Aluno** | Inscrito ou bolsista | Saber o status da inscrição e acessar o EAD |
| **Admin / Coordenação** | Equipe do projeto social | Analisar inscrições rápido e não fazer trabalho manual |

**3. Product Goal (escrever no quadro)**

> **"Um jovem consegue se inscrever sozinho na bolsa, a coordenação aprova pelo sistema,
> e o aluno recebe o acesso ao EAD automaticamente, sem nenhum passo manual."**

**4. Épicos**: apresente os 6 épicos de [user-stories.md](user-stories.md#épicos-do-sgb). Não detalhe, isso é trabalho do workshop.

**5. Perguntas (5 min)**: responda só perguntas de negócio. Se perguntarem "vai ser em Laravel?",
responda: *"a stack já está definida no projeto; o como fica com vocês"*.

### Bloco 4 — Workshop de user stories
- Circule entre as duplas e responda dúvidas
- Na leitura em voz alta, para cada história pergunte:
  - "**Para que** serve isso? Quem ganha com isso?" (valor)
  - "**Como eu sei** que está pronto?" (critério de aceite)
- Se a história não tiver valor para uma persona, devolva: *"reescrevam do ponto de vista do usuário"*

### Bloco 5 — Refinamento
- **Ordene** o backlog: você decide a prioridade, o time decide o tamanho
- Critério de prioridade para o SGB: **siga o fluxo do usuário**. Sem inscrição não há o que aprovar, e sem aprovação não há conta Moodle

### Bloco 6 — Sprint Planning
- Proponha o Sprint Goal (sugestão em [sprint-01.md](sprint-01.md))
- Se o time disser que não cabe tudo, **negocie o escopo, não o prazo nem a qualidade**. Tire uma história, não os testes

## Durante a sprint
- Responder dúvidas no grupo em até 24h
- Revisar as issues que chegarem na coluna **Em Revisão** do ponto de vista do negócio: "faz o que a história pede?"
- Refinar o backlog das próximas sprints (escrever critérios de aceite das histórias da sprint 2)

## Na Sprint Review
- Testar ao vivo cada história entregue contra os critérios de aceite
- Aceitar (vai para **Feito**) ou recusar (volta para o backlog, com comentário)
- Atualizar a prioridade do backlog com base no que aprendeu
