# Aula 01 — Setup do Ambiente de Desenvolvimento

## Objetivos
- Configurar WSL no Windows para ter um ambiente Linux Ubuntu
- Conhecer os comandos básicos do terminal Linux
- Instalar e configurar VS Code com extensões essenciais
- Instalar Docker para conteinerização
- Instalar Node.js

## WSL (Windows Subsystem for Linux)

### Instalação
```bash
# PowerShell como Administrador
wsl --install

# Verificar versão
wsl --status

# Listar distribuições disponíveis
wsl --list --online

# Instalar Ubuntu
wsl --install -d Ubuntu
```

### Comandos Linux básicos
| Comando | Função |
|---------|--------|
| `pwd` | Mostra diretório atual |
| `ls` | Lista arquivos |
| `cd` | Navega entre diretórios |
| `mkdir` | Cria diretório |
| `touch` | Cria arquivo |
| `cp` | Copia arquivos |
| `mv` | Move/renomeia |
| `rm` | Remove arquivos |
| `cat` | Mostra conteúdo |
| `sudo` | Executa como admin |
| `apt` | Gerenciador de pacotes |

## VS Code

### Extensões recomendadas
- **Prettier** — Formatador de código
- **Live Server** — Servidor local com reload automático
- **ESLint** — Análise de código JavaScript
- **Docker** — Gerenciamento de containers
- **GitLens** — Visualização de Git
- **Thunder Client** — Testar APIs

### Atalhos essenciais
| Atalho | Ação |
|--------|------|
| `Ctrl + P` | Abrir arquivo |
| `Ctrl + Shift + P` | Paleta de comandos |
| `Ctrl + B` | Toggle sidebar |
| `Ctrl + ;` | Toggle terminal |

## Docker

### Instalação no Ubuntu/WSL
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
# Reinicie o terminal
docker --version
```

### Comandos básicos
```bash
docker run hello-world
docker ps
docker images
```

## Node.js
```bash
# Instalar via nvm (recomendado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
node --version
npm --version
```

## Atividade Prática
1. Instale WSL + Ubuntu
2. Crie uma pasta `projetos` no Ubuntu
3. Instale VS Code e abra a pasta com `code .`
4. Rode `docker run hello-world`
5. Instale Node.js e rode `node -e "console.log('Hello Turma 3!')"`

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Crie sua pasta e salve os arquivos da atividade
mkdir -p alunos/seu-nome/aulas/01-setup
# Crie um arquivo setup.md com os comandos que você executou

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 01 - setup do ambiente"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
