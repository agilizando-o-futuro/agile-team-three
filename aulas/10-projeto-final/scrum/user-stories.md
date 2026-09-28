# User Stories — Guia + Backlog Inicial do SGB

## Quem escreve as user stories?

**Resposta curta: o time inteiro escreve, e o PO é o responsável final.**

| Quem | Papel na história |
|------|-------------------|
| **PO** | É o **dono** do backlog. Traz a visão e os épicos, valida o **valor**, escreve ou aprova os **critérios de aceite** e define a **prioridade** |
| **Time de Dev** | **Coescreve** as histórias, faz perguntas, aponta riscos técnicos, **estima** e quebra em tarefas |
| **Scrum Master** | Facilita o workshop e garante que as histórias sigam o formato e a Definition of Ready |

Por que não só o PO? Uma user story é **um lembrete de uma conversa**, não um contrato.
O valor está na conversa entre quem entende o negócio e quem vai construir.
É a regra dos **3 Cs**:

1. **Card** (cartão): a frase curta da história
2. **Conversation** (conversa): a discussão entre PO e time sobre os detalhes
3. **Confirmation** (confirmação): os critérios de aceite, que dizem como sabemos que está pronto

## Formato

```
Como <persona>,
quero <ação/funcionalidade>,
para <benefício/valor>.

Critérios de aceite:
- Dado <contexto>, quando <ação>, então <resultado esperado>
- ...
```

### Exemplo bom ✅

> **Como** visitante, **quero** me inscrever informando meus dados pessoais,
> **para** concorrer a uma bolsa do Agilizando o Futuro.
>
> **Critérios de aceite**
> - Dado que estou em `/inscrever`, quando preencho todos os campos obrigatórios e envio, então vejo a mensagem de sucesso com meu número de protocolo
> - Dado que informo um CPF já inscrito, quando envio, então vejo o erro "CPF já possui inscrição"
> - Dado que deixo um campo obrigatório vazio, quando envio, então o campo fica destacado com a mensagem de erro
> - A inscrição fica salva com status `pendente`

### Exemplos ruins ❌

| História | Problema |
|----------|----------|
| "Criar tabela inscricoes" | É uma **tarefa técnica**, não uma história. Não tem persona nem valor |
| "Como usuário, quero um sistema bom" | Vaga e impossível de testar |
| "Como admin, quero gerenciar tudo" | Grande demais: é um **épico** |
| "Como dev, quero usar Redis" | O usuário não ganha nada diretamente. Vira tarefa dentro de uma história |

## Checklist INVEST

Toda história boa é:

| Letra | Significa | Pergunta |
|-------|-----------|----------|
| **I** | Independente | Dá para fazer sem esperar outra história? |
| **N** | Negociável | O detalhe pode ser conversado? |
| **V** | Valiosa | Alguma persona ganha algo? |
| **E** | Estimável | O time consegue estimar? |
| **S** | Small (pequena) | Cabe em uma sprint (≤ 8 pontos)? |
| **T** | Testável | Tem critérios de aceite verificáveis? |

## Hierarquia: Épico → História → Tarefa

```
ÉPICO   E1 Inscrição                          (label: epico:inscricao)
 └── HISTÓRIA  US01 Visitante se inscreve       (issue, com pontos)
      ├── TAREFA  Migration + model Inscricao   (sub-issue ou checklist)
      ├── TAREFA  FormRequest de validação
      ├── TAREFA  Página React /inscrever
      └── TAREFA  Feature test do fluxo
```

---

## Épicos do SGB

| # | Épico | Persona principal | Resumo |
|---|-------|-------------------|--------|
| E0 | **Fundação** | Time | Projeto rodando para todos: Laravel + Inertia + React + Postgres + Docker + CI |
| E1 | **Inscrição** | Visitante | Formulário público `/inscrever`, validação, protocolo |
| E2 | **Gestão (Admin)** | Admin | Login, listar, analisar, deferir e indeferir inscrições, gerenciar bolsas |
| E3 | **Painel do Aluno** | Aluno | Login, ver dados, status da inscrição e da bolsa |
| E4 | **Integrações** | Aluno/Admin | Evento → conta Moodle → e-mail de boas-vindas (filas) |
| E5 | **API Mobile** | App Flutter | Endpoints REST com Sanctum |
| E6 | **Entrega** | Todos | Deploy, README, testes do fluxo completo |

---

## Backlog inicial proposto

> 🔒 **Gabarito do professor.** Use **depois** do workshop para comparar com o que o time escreveu.
> Os pontos são sugestões; quem estima de verdade é o time.

Ordem = prioridade sugerida pelo PO.

### E0 — Fundação

**US00 — Ambiente do projeto pronto para o time** *(habilitadora, 5 pts)*
> Como **time de desenvolvimento**, quero o projeto SGB rodando igual na máquina de todos,
> para podermos trabalhar em paralelo sem "na minha máquina funciona".
- `git clone` + `docker compose up` (ou `./vendor/bin/sail up`) sobe a aplicação em `http://localhost`
- Laravel 13 + Inertia + React + Tailwind configurados, com uma página inicial renderizando
- PostgreSQL rodando e `php artisan migrate` funcionando
- `php artisan test` passa
- GitHub Actions roda os testes em todo PR
- O README explica como subir o projeto em até 5 passos

> ⚠️ Não é uma história de usuário "pura", mas na sprint 1 é necessária. Chame de **história habilitadora**.

### E1 — Inscrição

**US01 — Visitante se inscreve** *(5 pts)*
> Como **visitante**, quero preencher um formulário com meus dados pessoais,
> para concorrer a uma bolsa do Agilizando o Futuro.
- A página pública `/inscrever` tem os campos nome, e-mail, CPF, telefone (WhatsApp) e data de nascimento
- Todos os campos são obrigatórios e validados: e-mail válido, CPF válido e único, idade mínima definida pelo PO
- Ao enviar, cria o `user` (role `aluno`) e a `inscricao` com status `pendente`
- Mensagens de erro aparecem em português, ao lado de cada campo
- Funciona bem no celular (layout responsivo)

**US02 — Visitante recebe o protocolo** *(2 pts)*
> Como **visitante**, quero receber um número de protocolo depois de me inscrever,
> para ter a certeza de que minha inscrição foi registrada.
- Depois do envio, sou redirecionado para uma página de confirmação
- Ela mostra o protocolo no formato `AAAA-000001` (ano + sequencial)
- O protocolo fica salvo na inscrição e é único

### E2 — Gestão (Admin)

**US03 — Admin vê as inscrições** *(3 pts)*
> Como **admin**, quero ver a lista de inscrições recebidas,
> para acompanhar quantas pessoas se inscreveram.
- Existe um login de admin (usuário criado via seeder)
- A página `/admin/inscricoes` só é acessível para role `admin`
- A tabela mostra protocolo, nome, e-mail, data e status, das mais recentes para as mais antigas
- Tem paginação de 20 por página

**US04 — Admin analisa uma inscrição** *(3 pts)*
> Como **admin**, quero ver os detalhes de uma inscrição,
> para decidir se ela será deferida.
- Clicar em uma linha abre a página de detalhes com todos os dados
- Tem um campo de observações da coordenação

**US05 — Admin defere ou indefere** *(5 pts)*
> Como **admin**, quero deferir ou indeferir uma inscrição,
> para que o candidato siga (ou não) para a bolsa.
- Botões "Deferir" e "Indeferir" com confirmação
- Indeferir exige uma observação
- O status muda para `deferido` / `indeferido` e registra quem decidiu e quando
- Ao deferir, dispara o evento `AlunoInscrito` (a integração com o Moodle vem na US09)

**US06 — Admin filtra inscrições** *(2 pts)*
> Como **admin**, quero filtrar por status e buscar por nome ou CPF, para achar uma inscrição rápido.

### E3 — Painel do Aluno

**US07 — Aluno acessa o painel** *(3 pts)*
> Como **aluno**, quero entrar no sistema com e-mail e senha,
> para acompanhar minha inscrição.
- Login e logout funcionando; recuperação de senha pelo fluxo padrão do Laravel
- Depois do login, o aluno vai para `/painel`

**US08 — Aluno vê o status** *(2 pts)*
> Como **aluno**, quero ver o status da minha inscrição e da minha bolsa,
> para saber em que etapa estou.
- O painel mostra protocolo, status com cor (pendente = amarelo, deferido = verde, indeferido = vermelho) e observação, se houver

### E4 — Integrações

**US09 — Conta no Moodle criada automaticamente** *(8 pts)*
> Como **aluno deferido**, quero ter minha conta no EAD criada automaticamente,
> para começar o curso sem esperar a coordenação.
- O listener do evento `AlunoInscrito` roda na fila e chama `core_user_create_users`
- Salva o `moodle_id` no user
- Se o Moodle falhar, tenta de novo 3 vezes e registra log
- Nos testes, o Moodle é simulado com `Http::fake()`

**US10 — E-mail de boas-vindas** *(3 pts)*
> Como **aluno**, quero receber um e-mail com minhas credenciais do SGB e do Moodle,
> para conseguir acessar as plataformas.
- Disparado pelo evento `ContaMoodleCriada`
- Em dev, o e-mail pode ser visto no Mailpit

### E5 — API Mobile

**US11 — App autentica o aluno** *(3 pts)*: `POST /api/login` retorna o token Sanctum
**US12 — App consulta o status** *(3 pts)*: `GET /api/me/inscricao` (protegido)

### E6 — Entrega

**US13 — Deploy** *(5 pts)*: sistema acessível em uma URL pública
**US14 — Teste do fluxo completo** *(3 pts)*: feature test inscrição → deferimento → evento → e-mail

---

## Roadmap sugerido (sprints de 1 semana)

| Sprint | Objetivo | Histórias |
|--------|----------|-----------|
| **1** | *"Um visitante consegue se inscrever e o admin vê a inscrição"* | US00, US01, US02, US03 |
| 2 | *"A coordenação consegue decidir e o aluno acompanha"* | US04, US05, US07, US08 |
| 3 | *"Aluno deferido recebe acesso ao EAD automaticamente"* | US09, US10, US06 |
| 4 | *"SGB no ar e pronto para o app"* | US11, US12, US13, US14 |

> O roadmap é uma **previsão, não uma promessa**. Depois de cada review o PO reordena o backlog.
