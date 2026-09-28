# Sprint 1 — Proposta

## Devemos focar no objetivo da sprint? Sim.

O **Sprint Goal** é o que dá sentido à sprint. Sem ele, a sprint vira uma lista de tarefas soltas.
Com ele:
- Cada decisão durante a sprint tem uma pergunta-guia: *"isso nos aproxima do objetivo?"*
- Se algo der errado, o time pode **cortar escopo** e ainda assim cumprir o objetivo
- Na review, o sucesso não é "fizemos 100% das tarefas", e sim **"cumprimos o objetivo?"**

## 🎯 Sprint Goal

> **"Um visitante consegue se inscrever pelo `/inscrever`, recebe um protocolo,
> e o admin vê essa inscrição na lista, tudo rodando na máquina de todos do time."**

Por que esse objetivo:
1. **Fatia vertical**: atravessa todas as camadas (React → Laravel → Postgres → React). Prova que a stack funciona de ponta a ponta
2. **Primeiro passo do fluxo**: sem inscrição não existe nada para aprovar, integrar ou mandar por e-mail
3. **Demonstrável**: na review, o PO se inscreve ao vivo e vê a inscrição aparecer no admin
4. **Tira o maior risco cedo**: o setup (Docker, Inertia, Postgres) é onde turmas iniciantes mais travam. Resolver isso na sprint 1 desbloqueia todo o resto

## Sprint Backlog

| # | História | Pontos | Prioridade |
|---|----------|--------|------------|
| US00 | Ambiente do projeto pronto para o time | 5 | 🔴 Obrigatória, bloqueia tudo |
| US01 | Visitante se inscreve | 5 | 🔴 Obrigatória |
| US02 | Visitante recebe o protocolo | 2 | 🟡 Importante |
| US03 | Admin vê as inscrições | 3 | 🟡 Importante |
| | **Total** | **15** | |

**Se sobrar tempo** (não entra no compromisso): US07, login do aluno.
**Se faltar tempo**, corte nesta ordem: US03 → US02. **Nunca** corte US00 nem US01, porque sem elas o objetivo não é cumprido.

> Na primeira sprint o time ainda não sabe a própria **velocidade**. 15 pontos é uma aposta
> conservadora para 4 pessoas em meio período. A velocidade real medida nesta sprint
> vai guiar a sprint 2.

Critérios de aceite completos em [user-stories.md](user-stories.md#backlog-inicial-proposto).

## Tarefas técnicas (o "como", sugestão para o time discutir)

### US00 — Ambiente (fazer em **mob programming** na própria aula, ou pelo SM + 1 dev no dia 1)
- [ ] Criar o projeto Laravel 13 com o starter kit React (Inertia + Tailwind)
- [ ] Configurar Docker (Laravel Sail) com PostgreSQL
- [ ] Ajustar o `.env.example` para Postgres
- [ ] GitHub Actions: rodar `php artisan test` em PRs
- [ ] Proteger o `main` (1 aprovação + CI verde)
- [ ] README: como subir o projeto
- [ ] **Todos os 4 alunos** clonam e sobem o projeto → só então a US00 está pronta

> ⚠️ **US00 é gargalo.** Enquanto ela não estiver no `main`, as outras não começam.
> Por isso a recomendação é fazê-la **juntos**, no fim da aula ou em uma call no dia seguinte.

### US01 — Inscrição (dupla backend + dupla frontend em paralelo)
Backend:
- [ ] Migration: colunas extras em `users` (cpf, telefone, data_nascimento, role)
- [ ] Migration + model `Inscricao` (status enum, dados_json, observacoes, protocolo)
- [ ] Relacionamento `User hasOne Inscricao`
- [ ] `InscricaoRequest` (FormRequest) com validação de CPF e mensagens em pt-BR
- [ ] `InscricaoController@create` e `@store`
- [ ] Feature test: inscrição válida salva; CPF duplicado retorna erro

Frontend:
- [ ] Página `Inscricao/Create.jsx` com o formulário (`useForm` do Inertia)
- [ ] Máscara de CPF e telefone
- [ ] Exibir erros de validação por campo
- [ ] Layout responsivo (testar no celular)

### US02 — Protocolo
- [ ] Gerar o protocolo `AAAA-000001` ao salvar (service ou observer)
- [ ] Página `Inscricao/Sucesso.jsx`
- [ ] Test: o protocolo é único e segue o formato

### US03 — Lista do admin
- [ ] Seeder do usuário admin
- [ ] Middleware / Gate `admin`
- [ ] `Admin\InscricaoController@index` com paginação
- [ ] Página `Admin/Inscricoes/Index.jsx` (tabela)
- [ ] Test: aluno não acessa `/admin/inscricoes`; admin acessa

## Divisão sugerida (o time decide na planning)

| Pessoa | Foco | Primeira tarefa |
|--------|------|-----------------|
| SM (Joerffeson) | US00, depois apoio | Criar o projeto Laravel + Sail |
| Dev 2 | US01 backend | Migrations e model |
| Dev 3 | US01 frontend → US02 | Página do formulário |
| Dev 4 | US03 | Seeder admin + middleware |

**Pareamento**: quem terminar primeiro revisa o PR do colega ou faz par com quem estiver travado.

## Agenda da sprint (1 semana)

| Dia | Marco esperado |
|-----|----------------|
| Dia 1 (hoje) | Planning ✅; US00 começada, se possível em mob |
| Dia 2 | US00 no `main`; todos com o projeto rodando |
| Dia 3–4 | US01 backend e frontend integrados |
| Dia 5 | US02 e US03; PRs revisados |
| Dia 6 | Congelamento: só correções e testes; ensaio da demo |
| Dia 7 (aula) | **Sprint Review** (PO se inscreve ao vivo) + **Retro** + Planning da sprint 2 |

## Roteiro da Sprint Review (para a próxima aula)
1. SM relembra o Sprint Goal (1 min)
2. Um dev faz a demo: abre `/inscrever`, preenche, mostra o protocolo, loga como admin e mostra a lista
3. O PO testa um caso de erro ao vivo (CPF duplicado)
4. O PO aceita ou recusa cada história
5. O time mostra o GitHub Project: planejado × entregue (velocidade)
6. O PO reordena o backlog para a sprint 2
