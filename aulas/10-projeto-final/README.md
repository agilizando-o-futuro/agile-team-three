# Aula 10 — Projeto Final: SGB - Agilizando o Futuro

## Objetivo
Desenvolver o **Sistema de Gestão de Bolsas (SGB)** do projeto social Agilizando o Futuro — uma aplicação completa com Laravel, Inertia, React, API REST, integração com Moodle e app mobile Flutter.

## Escopo do Projeto

### O que vamos construir
- Sistema web de inscrição e gestão de bolsas de treinamento
- API REST para consumo pelo app Flutter e WordPress
- Integração com Moodle para criação automática de contas EAD
- Fluxo de e-mails transacionais (boas-vindas, credenciais)

### Quem usa o sistema
| Perfil | O que faz |
|--------|-----------|
| **Visitante** | Acessa landing page, se inscreve |
| **Aluno** | Acessa painel, vê bolsa, acessa EAD |
| **Admin** | Gerencia inscrições, bolsas, usuários |

## Stack

| Tecnologia | Uso |
|------------|-----|
| Laravel 13 | Backend, API, eventos |
| Inertia V3 + React | Frontend web (SPA) |
| Tailwind CSS | Estilização |
| Sanctum | Autenticação API |
| PostgreSQL | Banco SGB |
| Redis + Horizon | Filas de eventos |
| Moodle REST API | Criação de contas EAD |

## Fluxo Completo

```
WordPress ──► /inscrever ──► Formulário React
                                  │
                                  ▼
                            Salva no DB
                                  │
                                  ▼
                  Evento → Cria Moodle → Evento → E-mail
```

## O que será avaliado

1. **Formulário de inscrição funcional** — público, salva no banco
2. **Painel do aluno** — login, dados, status da bolsa
3. **Admin** — listar/approvar/reprovar inscrições
4. **Integração Moodle** — listener cria conta via API
5. **E-mail automático** — boas-vindas com credenciais
6. **API REST** — endpoints para Flutter
7. **Testes** — feature tests do fluxo principal
8. **IA no processo** — prompts, agentes, code review

## Como usar os agentes

```bash
# Planejar a modelagem
opencode "professor" "Modele o banco de dados para um sistema de gestão de bolsas com Laravel"

# Implementar controller
opencode "tutor-laravel" "Crie um controller de inscrição com validação usando FormRequest"

# Integração Moodle
opencode "tutor-ia" "Como estruturar a integração com a API REST do Moodle para criar usuários?"

# Revisão
opencode "revisor" "Revise minha migration e aponte melhorias"
```
