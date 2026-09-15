# Spec: Lista de Tarefas (Todo List)

## Descrição
Aplicação web simples para gerenciar tarefas pessoais, construída com **HTML, CSS e JavaScript puro** (sem frameworks).

---

## Requisitos Funcionais

### RF01 - Adicionar Tarefa
- Label Solicitando que digite a tarefa a ser criada
- Campo de texto para digitar a tarefa
- Botão "Adicionar" (ou Enter) cria a tarefa
- Validação: não permitir tarefa vazia ou só espaços
- Exibir mensagem de erro se inválida

### RF02 - Listar Tarefas
- Exibir todas as tarefas em lista ordenada (mais recente primeiro)
- Cada item mostra: texto da tarefa, status (pendente/concluída), botões de ação

### RF03 - Marcar como Concluída
- Checkbox ou botão para alternar status
- Visual: texto riscado + cor diferente quando concluída

### RF04 - Editar Tarefa
- Botão "Editar" transforma o texto em input preenchido
- Enter ou blur salva; Escape cancela
- Validação igual à adição

### RF05 - Excluir Tarefa
- Botão "Excluir" remove da lista
- Confirmação opcional (ex: `confirm()`)

### RF06 - Persistência Local
- Salvar no `localStorage` a cada mudança
- Carregar ao abrir a página

### RF07 - Filtros (Opcional)
- Botões: "Todas", "Pendentes", "Concluídas"
- Contador de tarefas pendentes

---

## Requisitos Não-Funcionais

| Critério | Detalhe |
|----------|---------|
| **Acessibilidade** | Labels nos inputs, navegação por teclado, ARIA básico |
| **Responsivo** | Funcionar em mobile (≤ 480px) e desktop |
| **Performance** | Zero dependências externas, < 50KB total |
| **Navegadores** | Chrome, Firefox, Safari, Edge (últimas 2 versões) |

---

## Estrutura de Arquivos Esperada

```
/aulas/09-ia-no-codigo/
├── spec.md          ← este arquivo
├── index.html       ← estrutura semântica
├── style.css        ← estilos (mobile-first)
├── script.js        ← lógica (ES6 modules ou IIFE)
└── revisao.md       ← (preenchido pelo revisor depois)
```

---

## Modelo de Dados (localStorage)

```json
[
  {
    "id": "uuid-ou-timestamp",
    "texto": "Estudar ReAct pattern",
    "concluida": false,
    "criadaEm": "2026-09-14T10:30:00.000Z",
    "atualizadaEm": "2026-09-14T10:30:00.000Z"
  }
]
```

---

## Critérios de Aceite

- [ ] Adicionar tarefa válida → aparece na lista
- [ ] Adicionar vazia → mostra erro, não adiciona
- [ ] Marcar concluída → risca texto, atualiza contador
- [ ] Editar → salva alteração, mantém ID e datas
- [ ] Excluir → remove da lista e do localStorage
- [ ] Recarregar página → tarefas persistem
- [ ] Filtros funcionam (se implementado)
- [ ] Navegação 100% por teclado (Tab, Enter, Escape)
- [ ] Sem erros no console