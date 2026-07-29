# Projeto Final — SGB (Sistema de Gestão de Bolsas)

## Descrição
Sistema web para gestão de bolsas de treinamento do projeto social **Agilizando o Futuro**. O sistema gerencia inscrições, bolsas, alunos e se integra com WordPress (landing page), Moodle (conteúdo EAD) e app mobile Flutter.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Backend | Laravel 13 + Sanctum |
| Frontend Web | Inertia V3 + React + Tailwind |
| API | REST JSON (Sanctum tokens) |
| DB Principal | PostgreSQL (SGB) |
| DB Moodle | MySQL ou PostgreSQL (separado) |
| Landing Page | WordPress (agilizandoofuturo.org) |
| App Mobile | Flutter |
| Filas | Redis + Laravel Horizon |
| Integrações | Moodle REST API, E-mail (SMTP) |

## Arquitetura

```
agilizandoofuturo.org (WordPress)
       │
       │ CTA → /inscrever
       ▼
Laravel + Inertia React (SGB)
       │
       ├── REST API ───► App Flutter
       │
       └── Moodle REST API ───► Moodle (EAD)
                (core_user_create_users)

Eventos:
  AlunoInscrito     → Listener: criar conta Moodle
  ContaMoodleCriada → Listener: e-mail boas-vindas
```

## Fluxo de Inscrição

```
1. Visitante acessa agilizandoofuturo.org
2. Clica "Inscrever-se" → redireciona para /inscrever (Laravel)
3. Preenche formulário com dados pessoais
4. Sistema salva no DB SGB
5. Dispara evento AlunoInscrito
6. Listener cria conta no Moodle via API REST
7. Dispara evento ContaMoodleCriada
8. Listener envia e-mail com:
   - Credenciais SGB (email + senha)
   - Credenciais Moodle (email + senha gerada)
   - Orientações de boas-vindas
```

## Modelo de Dados (SGB)

### users
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | bigint | PK |
| name | string | Nome completo |
| email | string | Email (login) |
| password | string | Hash |
| cpf | string | CPF (único) |
| telefone | string | WhatsApp |
| data_nascimento | date | |
| foto | string | URL avatar |
| role | enum | admin, aluno |
| moodle_id | int | ID no Moodle |
| email_verified_at | datetime | |
| timestamps | | |

### inscricoes
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | bigint | PK |
| user_id | bigint | FK users |
| status | enum | rascunho, pendente, deferido, indeferido |
| dados_json | jsonb | Dados dinâmicos do formulário |
| observacoes | text | Análise da coordenação |
| protocolo | string | Número do protocolo |
| timestamps | | |

### bolsas
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | bigint | PK |
| user_id | bigint | FK users |
| tipo | enum | integral, parcial |
| status | enum | ativa, suspensa, cancelada, concluida |
| data_inicio | date | |
| data_fim | date | |
| timestamps | | |

## Eventos

### AlunoInscrito
```php
class AlunoInscrito implements ShouldQueue
{
    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
}
```

### ContaMoodleCriada
```php
class ContaMoodleCriada implements ShouldQueue
{
    public $user;
    public $moodleCredentials;

    public function __construct(User $user, array $moodleCredentials)
    {
        $this->user = $user;
        $this->moodleCredentials = $moodleCredentials;
    }
}

// Listener: SendWelcomeEmail
// - E-mail com credenciais SGB + Moodle
// - Orientações de acesso
// - Links úteis
```

## Entregáveis

- [ ] Setup Laravel + Inertia + React + Sanctum + PostgreSQL
- [ ] CRUD de usuários (alunos)
- [ ] Formulário de inscrição público (/inscrever)
- [ ] Dashboard do aluno (painel)
- [ ] Admin para gestão de inscrições e bolsas
- [ ] Evento + listener de integração Moodle
- [ ] Evento + listener de e-mail boas-vindas
- [ ] API REST para app Flutter (endpoints públicos + protegidos)
- [ ] Deploy (Docker ou serviço cloud)
- [ ] README completo com instruções

## Critérios de Avaliação
- Funcionalidade completa (fluxo de inscrição funcionando)
- Integrações ativas (Moodle, e-mail)
- Código organizado (controllers, services, events, listeners)
- Testes (feature tests)
- Uso de IA no desenvolvimento (evidência nos commits/PRs)
