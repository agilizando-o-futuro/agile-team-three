# Aula 01 — Setup do Ambiente

Comandos que eu rodei pra deixar o ambiente pronto.

## WSL + Ubuntu

Abri o PowerShell como administrador e instalei o WSL:

```bash
wsl --install
wsl --install -d Ubuntu
```

Depois de reiniciar a máquina, o Ubuntu configurou o usuário e senha. Pra confirmar que tava tudo certo:

```bash
wsl --status
wsl --list --online
```

## Comandos básicos que usei

```bash
# criei a pasta de projetos
cd ~
mkdir projetos
ls
```

| Comando | Pra que serve |
|---------|---------------|
| `pwd` | mostra onde eu tô |
| `ls` | lista os arquivos |
| `cd` | entra em uma pasta |
| `mkdir` | cria pasta |
| `sudo` | admin |

## VS Code

Instalei o VS Code e abri a pasta com:

```bash
code .
```

Instalei as extensões Prettier, Live Server, ESLint, Docker e GitLens.

## Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
docker --version
# teste final
docker run hello-world
```

## Node.js (nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
node --version
npm --version
```

Fiz o teste:

```bash
node -e "console.log('Hello Turma 3!')"
```

Saída: `Hello Turma 3!`