# Papel: Time de Desenvolvimento (Devs)

**Quem:** Joerffeson, Luan, Natanael e Thiago (o SM da vez também desenvolve).

## Em uma frase

O time decide **como** construir e **quanto** cabe na sprint, e entrega, ao final de cada
sprint, um **incremento funcionando** que cumpre a Definition of Done.

## Responsabilidades

| O time faz | O time **não** faz |
|------------|--------------------|
| Ajuda a escrever e refinar as user stories | Inventa funcionalidade que o PO não pediu |
| Estima as histórias (Planning Poker) | Aceita mais do que cabe "para agradar" |
| Quebra as histórias em tarefas técnicas | Espera alguém mandar pegar tarefa |
| Se auto-organiza: cada um **puxa** sua tarefa | Deixa card parado sem avisar |
| Revisa o PR dos colegas | Faz merge do próprio PR sem revisão |
| Cumpre a Definition of Done | Considera "pronto" o que só funciona na sua máquina |
| Avisa impedimentos na daily | Some por 3 dias e aparece com tudo pronto (ou nada) |

## Roteiro do time na aula de hoje

### Bloco 3 — Visão do produto
- Escute e **anote dúvidas de negócio**, não técnicas
- Boas perguntas para o PO:
  - "Quais dados são obrigatórios na inscrição?"
  - "Uma pessoa pode se inscrever duas vezes com o mesmo CPF?"
  - "Quem aprova a inscrição? Pode ser mais de uma pessoa?"
  - "O aluno precisa de senha logo na inscrição ou recebe depois?"

### Bloco 4 — Workshop de user stories
Em dupla, para cada história:
1. Escolha a **persona** (Visitante, Aluno ou Admin)
2. Escreva: `Como <persona>, quero <ação>, para <benefício>`
3. Escreva **de 2 a 5 critérios de aceite**, verificáveis:
   - ✅ "Se o CPF já estiver cadastrado, aparece a mensagem 'CPF já inscrito'"
   - ❌ "O formulário deve ser bom"
4. Teste com a pergunta: *"o PO consegue testar isso sozinho, sem ler código?"*

Use o [guia de user stories](user-stories.md) como referência.

### Bloco 5 — Planning Poker
- Estime o **esforço + complexidade + incerteza**, não horas
- Referência: **"Criar uma migration + model simples = 1 ponto"**. Compare tudo com isso
- Vote pelo que **você** acha. Não copie o colega que sabe mais: se os votos divergem, a conversa que vem depois é o que dá valor ao Poker

### Bloco 6 — Sprint Planning
- Seja realista: vocês têm aula, trabalho e vida. **Quanto tempo cada um tem por semana?** Fale em voz alta
- Quebre cada história em tarefas de **no máximo 1 dia de trabalho**
- Saia da reunião sabendo **qual é sua primeira tarefa**

## Fluxo de trabalho durante a sprint

```
1. Puxe um card de "A Fazer" → atribua a você → mova para "Fazendo"
2. git checkout main && git pull
3. git checkout -b feature/12-formulario-inscricao    ← número da issue
4. Desenvolva (use os agentes: tutor-laravel, tutor-js, revisor)
5. Rode os testes: php artisan test
6. Commit: "feat: formulário de inscrição (#12)"
7. git push -u origin feature/12-formulario-inscricao
8. Abra o PR com "Closes #12" na descrição → mova o card para "Em Revisão"
9. Um colega revisa e aprova → merge → card vai para "Feito"
```

Os detalhes estão em [acordos-do-time.md](acordos-do-time.md).

## Dicas de ouro
- **Termine antes de começar outra.** Duas tarefas 100% prontas valem mais que quatro 80% prontas
- **Travou por mais de 1h? Peça ajuda.** Primeiro ao agente, depois a um colega, depois ao professor
- **PR pequeno é revisado rápido.** PR de 2.000 linhas ninguém revisa direito
- **Revise o PR dos colegas no mesmo dia.** PR parado trava o time inteiro
- **Registre o uso de IA**: coloque no PR qual agente ou prompt você usou. Isso conta na avaliação
