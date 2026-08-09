# Aula 02 — Git e GitHub

## Objetivos
- Entender o que é controle de versão e por que usar Git
- Aprender os comandos fundamentais do Git
- Criar e gerenciar repositórios no GitHub
- Publicar sites com GitHub Pages

## Conceitos

| Conceito | Descrição |
|----------|-----------|
| **Repositório** | Pasta monitorada pelo Git |
| **Commit** | Snapshot do projeto em um ponto no tempo |
| **Branch** | Ramificação paralela do código |
| **Merge** | União de branches |
| **Pull Request** | Proposta de alteração para revisão |

## Comandos Essenciais

### Configuração inicial
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Ciclo básico
```bash
git init                    # Iniciar repositório
git add .                   # Stagear arquivos
git commit -m "mensagem"    # Criar commit
git log --oneline           # Ver histórico
git status                  # Ver estado atual
```

### Branches
```bash
git branch nome-da-branch   # Criar branch
git checkout nome-da-branch # Mudar de branch
git checkout -b nova-branch # Criar e mudar
git merge nome-da-branch   # Unir branches
```

### GitHub
```bash
git remote add origin URL        # Conectar ao GitHub
git push -u origin main          # Enviar código
git pull origin main             # Atualizar local
git clone URL                    # Clonar repositório
```

## Fluxo de Trabalho Recomendado

```
main ──────┬─────── commit ───────┬─── merge ───►
           │                      │
           └─── branch (feature) ─┘
                          ↑
                   git checkout -b feature
                   # código...
                   git add .
                   git commit -m "feat: ..."
                   git push -u origin feature
                   # Abrir Pull Request no GitHub
```

## GitHub Pages
Publique sites estáticos gratuitamente:
1. Crie um repositório `seunome.github.io`
2. Faça push do HTML/CSS/JS na branch `main` ou `gh-pages`
3. Vá em Settings > Pages > selecione a branch
4. Site disponível em `https://seunome.github.io`

## Atividade Prática
1. Crie um repositório no GitHub chamado `meu-primeiro-site`
2. Clone localmente
3. Crie `index.html` com "Olá, Turma 3!"
4. Commit e push
5. Ative o GitHub Pages e acesse o site

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Crie sua pasta com o conteúdo da atividade
mkdir -p alunos/seu-nome/aulas/02-git
# Adicione o link do seu site no GitHub Pages em um arquivo link.md

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 02 - git e github"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
