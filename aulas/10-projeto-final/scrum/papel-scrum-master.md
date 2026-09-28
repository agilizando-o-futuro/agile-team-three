# Papel: Scrum Master (SM)

**Quem:** 1 aluno por sprint, em rodízio. Sugestão: Joerffeson → Thiago → Luan → Natanael.
O SM **também desenvolve**: ele fica com uma carga de tarefas um pouco menor (≈ 70%).

## Em uma frase

O SM é o **guardião do processo**. Ele faz as reuniões acontecerem no horário, com resultado
claro, e tira do caminho o que está travando o time.

## Responsabilidades

| O SM faz | O SM **não** faz |
|----------|------------------|
| Facilita os eventos (planning, daily, review, retro) e controla o tempo | Decide prioridade (isso é do PO) |
| Mantém o GitHub Project atualizado e visível | Manda nos devs ou distribui tarefas |
| Identifica e remove **impedimentos** | Resolve sozinho todo problema técnico |
| Protege o time de interrupções e de mudanças no meio da sprint | Faz o trabalho dos outros |
| Garante que todos falem, não só os mais extrovertidos | Deixa reunião passar do tempo "porque está boa" |
| Lembra o time da Definition of Done | — |

## Kit do SM

- ⏱️ Timer visível (celular ou [online-timer](https://www.online-stopwatch.com/))
- 📋 Este roteiro aberto
- 🗂️ GitHub Project aberto e compartilhado na tela
- 🃏 Cartas de Planning Poker ou link de [planningpokeronline.com](https://planningpokeronline.com)

## Roteiro do SM na aula de hoje

### Bloco 2 — Acordos (assume a condução)
> "A partir de agora eu vou facilitar. Meu trabalho é cuidar do tempo e garantir que a
> gente saia daqui com a sprint planejada. Vou ler nossos acordos, e se alguém discordar, é agora."

Leia os [acordos do time](acordos-do-time.md). Pergunte se alguém quer mudar algo e registre as mudanças.

### Bloco 4 — Workshop de user stories
1. Explique o formato (5 min):
   > "Toda história tem 3 partes: **quem** (persona), **o quê** (ação) e **para quê** (benefício).
   > E tem critérios de aceite, que é como o PO vai testar se está pronto."
2. Divida as duplas e cronometre **20 min**. Avise quando faltarem 5 min
3. Na leitura, cada dupla tem **7 min**. Corte com educação:
   > "Vamos anotar essa discussão como dúvida e seguir, para dar tempo da outra dupla."
4. Junte as histórias duplicadas. Marque com 🐘 as grandes demais

### Bloco 5 — Planning Poker
Script para cada história:
1. "O PO vai ler a história e os critérios." (PO lê)
2. "Dúvidas para o PO?" (máx. 2 min)
3. "Todos escolham a carta... 3, 2, 1, mostrem!"
4. Se os votos convergirem → anote. Se divergirem:
   > "Quem votou mais alto e quem votou mais baixo, expliquem o motivo." Depois o time vota de novo
5. Se continuar dividido depois de 2 rodadas, **fique com o maior valor** e siga em frente
6. Se a história passar de 13 pontos: "Essa é grande demais. PO, como a gente pode quebrar?"

### Bloco 6 — Sprint Planning
1. **Por quê**: "PO, qual o objetivo dessa sprint?" Escreva o Sprint Goal no campo de descrição do Project/milestone
2. **O quê**: puxe as histórias do topo do backlog, uma de cada vez:
   > "Essa cabe? Somando dá X pontos. Na primeira sprint a gente não sabe nossa velocidade,
   > então vamos ser conservadores."
3. **Como**: para cada história, o time lista as tarefas técnicas. Crie as tarefas como sub-issues ou como checklist na issue
4. Pergunte para cada pessoa: "Qual vai ser sua primeira tarefa?" e atribua a issue
5. Confira: todas as histórias da sprint estão na coluna **A Fazer** com o campo **Sprint = Sprint 1**?

## Durante a sprint

### Daily (15 min, sempre no mesmo horário)
Cada pessoa responde, olhando para o quadro:
1. O que eu fiz desde a última daily para o **Sprint Goal**?
2. O que vou fazer até a próxima?
3. Tem algo me travando?

Regras do SM:
- Se a daily for **assíncrona**: cobre no grupo quem não postou até as 10h
- Discussão técnica que passa de 1 minuto: *"Vamos marcar isso para depois da daily só com quem precisa"*
- Impedimento reportado → **o SM é o dono dele** até resolver ou escalar para o professor

### Saúde do quadro (olhar todo dia)
- Card parado em **Fazendo** há mais de 2 dias → pergunte se precisa de ajuda
- Card em **Em Revisão** sem revisor → chame alguém
- Alguém com mais de 2 cards em **Fazendo** → limite de WIP estourado

## Na Review e na Retro

**Sprint Review (30 min)**: o time demonstra, o PO aceita ou recusa, e o SM anota o feedback como novas issues.

**Retrospectiva (20 min)**: formato *Começar / Parar / Continuar*:
1. 5 min em silêncio: cada um escreve post-its nas 3 colunas
2. 10 min: leitura e agrupamento
3. 5 min: o time vota em **1 ação de melhoria** para a próxima sprint, com responsável
4. Passe o bastão para o próximo SM 🎤
