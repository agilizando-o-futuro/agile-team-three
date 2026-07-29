# Aula 04 — Usando IA no Ciclo de Desenvolvimento

## Objetivos
- Usar IA para gerar código a partir de especificações
- Usar IA para refatorar e melhorar código existente
- Usar IA para gerar testes
- Entender limitações e quando **não** confiar na IA

## Quando Usar (e Quando Não)

### ✅ Bons usos
- Gerar boilerplate / código repetitivo
- Explicar código legado ou complexo
- Sugerir nomes de variáveis e refatorações
- Escrever casos de teste
- Gerar documentação

### ❌ Cuidados
- Código gerado pode ter bugs sutis
- Alucinações em bibliotecas que não existem
- Código inseguro (injeção SQL, XSS)
- Dependências falsas ou versões erradas

## Fluxo Recomendado

```
1. Escreva a especificação do que precisa
2. Peça para IA gerar o código
3. Leia e entenda cada linha
4. Teste o código gerado
5. Peça revisão para o agente `revisor`
6. Refatore com IA se necessário
```

## Atividade Prática

1. Peça para o `professor` gerar uma spec simples
2. Peça para implementar em JavaScript
3. Use o `revisor` para revisar
4. Refatore baseado no feedback

```bash
opencode "professor" "Gere uma especificação para uma lista de tarefas (todo list) com HTML, CSS e JavaScript puro"

opencode "tutor-js" "Implemente a spec acima"

opencode "revisor" "Revise este código: [cole o código]"
```

## Entrega

```bash
# 1. Crie sua branch
git checkout -b aluno/seu-nome

# 2. Salve os arquivos do projeto
mkdir -p alunos/seu-nome/aulas/09-ia-codigo
# Adicione: spec.md, index.html, style.css, script.js, revisao.md

# 3. Commit e push
git add alunos/seu-nome/
git commit -m "feat: aula 09 - IA no código"
git push -u origin aluno/seu-nome

# 4. Abra um Pull Request no GitHub para entregar
```
