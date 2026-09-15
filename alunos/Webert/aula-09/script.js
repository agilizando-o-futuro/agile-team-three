// ============================================
// TODO LIST - Script principal
// Arquivo: alunos/Webert/aula-09/script.js
// ============================================

// Chave usada para salvar/recuperar dados no localStorage
const STORAGE_KEY = 'todo-list-data';

// ------------------------------------------------------------------
// ESTADO DA APLICAÇÃO (State)
// ------------------------------------------------------------------
// Guardamos tudo que muda durante o uso do app em um único objeto.
// Isso facilita debugging e mantém o código organizado.
const state = {
  todos: [],      // Array de objetos {id, texto, concluida, criadaEm, atualizadaEm}
  filter: 'all',  // Filtro atual: 'all' | 'pending' | 'completed'
};

// ------------------------------------------------------------------
// REFERÊNCIAS AOS ELEMENTOS DO DOM
// ------------------------------------------------------------------
// Selecionamos os elementos UMA VEZ no início (cache).
// Evita buscar no DOM repetidamente (performance).
const elements = {
  form: document.getElementById('todo-form'),           // <form>
  input: document.getElementById('todo-input'),         // <input> nova tarefa
  error: document.getElementById('todo-error'),         // <span> mensagem erro
  list: document.getElementById('todo-list'),           // <ul> lista de tarefas
  emptyMessage: document.getElementById('empty-message'), // <p> "nenhuma tarefa"
  pendingCount: document.getElementById('pending-count'), // <span> contador
  filterBtns: document.querySelectorAll('.filter-btn'),   // NodeList dos 3 botões filtro
};

// ------------------------------------------------------------------
// FUNÇÕES UTILITÁRIAS
// ------------------------------------------------------------------

/**
 * Gera ID único combinando timestamp + string aleatória base36.
 * Exemplo: "1726320000000-k3j2h1"
 * - Date.now(): milissegundos desde 1970 (único por ms)
 * - Math.random(): número aleatório 0-1
 * - .toString(36): converte para base 36 (0-9 + a-z) = mais curto
 * - .slice(2, 9): remove "0." inicial, pega 7 chars
 */
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Cria objeto tarefa com estrutura padronizada.
 * @param {string} text - Texto da tarefa (já vem com .trim() feito antes)
 * @returns {Object} Objeto tarefa pronto para ir no array state.todos
 */
function createTodo(text) {
  const now = new Date().toISOString(); // ISO 8601: "2026-09-14T10:30:00.000Z"
  return {
    id: generateId(),        // ID único
    texto: text.trim(),      // Texto limpo (sem espaços nas pontas)
    concluida: false,        // Sempre começa como pendente
    criadaEm: now,           // Timestamp de criação
    atualizadaEm: now,       // Timestamp de última alteração
  };
}

/**
 * Salva array state.todos no localStorage.
 * JSON.stringify converte array/objeto → string JSON.
 */
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
}

/**
 * Carrega tarefas do localStorage para state.todos.
 * Roda uma vez na inicialização (init).
 * try/catch evita quebrar se localStorage estiver corrompido.
 */
function loadTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      state.todos = JSON.parse(data); // string JSON → array/objeto JS
    } catch {
      state.todos = []; // Se der erro, começa limpo
    }
  }
}

/**
 * Retorna array filtrado conforme state.filter.
 * Não modifica state.todos original, só cria novo array filtrado.
 * @returns {Array} Tarefas filtradas
 */
function getFilteredTodos() {
  switch (state.filter) {
    case 'pending':
      // .filter cria novo array só com itens que passam no teste
      return state.todos.filter(t => !t.concluida);
    case 'completed':
      return state.todos.filter(t => t.concluida);
    default: // 'all'
      return state.todos;
  }
}

/**
 * Atualiza contador de tarefas pendentes no header.
 * Conta quantas têm concluida === false.
 */
function updatePendingCount() {
  const count = state.todos.filter(t => !t.concluida).length;
  elements.pendingCount.textContent = count;
}

/**
 * Mostra/esconde mensagem "Nenhuma tarefa encontrada".
 * classList.toggle('hidden', force) → adiciona se force=true, remove se false.
 * @param {boolean} show - true = mostra mensagem, false = esconde
 */
function toggleEmptyMessage(show) {
  elements.emptyMessage.classList.toggle('hidden', !show);
}

/**
 * Retorna string SVG do ícone solicitado.
 * Usamos SVG inline (string) para não depender de arquivos externos.
 * currentColor herda a cor do CSS (color: var(--color-text-muted)).
 * @param {string} name - 'edit' ou 'delete'
 * @returns {string} HTML do SVG
 */
function createIcon(name) {
  const icons = {
    edit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    delete: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  };
  return icons[name] || ''; // fallback vazio se nome inválido
}

/**
 * Escapa HTML para prevenir XSS (Cross-Site Scripting).
 * Se usuário digitar "<script>alert(1)</script>", vira texto literal.
 * Técnica: cria div temporária, define textContent (escapa auto), lê innerHTML.
 * @param {string} text - Texto do usuário
 * @returns {string} Texto seguro para innerHTML
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text; // Navegador escapa automaticamente
  return div.innerHTML;   // Retorna versão escapada
}

// ------------------------------------------------------------------
// RENDERIZAÇÃO (UI)
// ------------------------------------------------------------------

/**
 * Cria elemento <li> completo para uma tarefa.
 * Usa template literal (backticks) para HTML multi-linha.
 * dataset.id guarda o ID no elemento (acessível via el.dataset.id).
 * @param {Object} todo - Objeto tarefa do state.todos
 * @returns {HTMLLIElement} Elemento <li> pronto para append
 */
function createTodoElement(todo) {
  const li = document.createElement('li');
  // Adiciona classe 'completed' se concluida === true (CSS risca o texto)
  li.className = 'todo-item' + (todo.concluida ? ' completed' : '');
  li.dataset.id = todo.id; // Importante para achar a tarefa nos eventos

  // innerHTML com interpolação ${} - CUIDADO: usamos escapeHtml() nos textos do usuário
  li.innerHTML = `
    <input type="checkbox" class="todo-checkbox" ${todo.concluida ? 'checked' : ''} aria-label="Marcar como ${todo.concluida ? 'pendente' : 'concluída'}">
    <span class="todo-text">${escapeHtml(todo.texto)}</span>
    <input type="text" class="todo-edit-input" value="${escapeHtml(todo.texto)}" aria-label="Editar tarefa">
    <div class="todo-actions">
      <button type="button" class="icon-btn edit" aria-label="Editar">${createIcon('edit')}</button>
      <button type="button" class="icon-btn delete" aria-label="Excluir">${createIcon('delete')}</button>
    </div>
  `;

  return li;
}

/**
 * Função principal de render - reconstrói toda a lista.
 * 1. Pega tarefas filtradas
 * 2. Limpa <ul> (innerHTML = '')
 * 3. Mostra/esconde mensagem vazia
 * 4. Para cada tarefa: cria <li> e adiciona na <ul>
 * 5. Atualiza contador
 */
function renderTodos() {
  const filtered = getFilteredTodos();
  elements.list.innerHTML = '';              // Limpa lista antiga
  toggleEmptyMessage(filtered.length === 0); // Mostra msg se vazio

  // forEach itera e executa callback para cada item
  filtered.forEach(todo => {
    const el = createTodoElement(todo);
    elements.list.appendChild(el); // Adiciona no final da <ul>
  });

  updatePendingCount();
}

/**
 * Muda filtro ativo e re-renderiza.
 * Atualiza estado + classes CSS + aria-pressed (acessibilidade).
 * @param {string} filter - 'all' | 'pending' | 'completed'
 */
function setFilter(filter) {
  state.filter = filter;
  elements.filterBtns.forEach(btn => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle('active', isActive);      // Estilo visual
    btn.setAttribute('aria-pressed', isActive);    // Leitores de tela
  });
  renderTodos();
}

// ------------------------------------------------------------------
// AÇÕES DO USUÁRIO (CRUD)
// ------------------------------------------------------------------

/** Mostra erro visual no input + aria-invalid para screen readers */
function showError(message) {
  elements.error.textContent = message;
  elements.input.setAttribute('aria-invalid', 'true');
}

/** Limpa erro visual */
function clearError() {
  elements.error.textContent = '';
  elements.input.removeAttribute('aria-invalid');
}

/**
 * Adiciona nova tarefa.
 * Valida: se vazia após trim, mostra erro e retorna false.
 * unshift adiciona no INÍCIO do array (mais recente primeiro).
 * @param {string} text - Valor do input
 * @returns {boolean} true se adicionou, false se inválido
 */
function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    showError('Digite algo para adicionar');
    return false;
  }
  clearError();
  const todo = createTodo(trimmed);
  state.todos.unshift(todo); // Adiciona no topo
  saveTodos();
  renderTodos();
  elements.input.value = '';  // Limpa input
  elements.input.focus();     // Foca para próxima digitação
  return true;
}

/**
 * Alterna status concluida/pendente.
 * find procura item no array pelo ID.
 * Atualiza timestamp de atualização.
 * @param {string} id - ID da tarefa
 */
function toggleTodo(id) {
  const todo = state.todos.find(t => t.id === id);
  if (!todo) return; // Segurança: se não achou, sai
  todo.concluida = !todo.concluida; // Inverte boolean
  todo.atualizadaEm = new Date().toISOString();
  saveTodos();
  renderTodos();
}

/**
 * Exclui tarefa com confirmação.
 * filter cria NOVO array sem o item (imutabilidade).
 * @param {string} id - ID da tarefa
 */
function deleteTodo(id) {
  if (!confirm('Excluir esta tarefa?')) return; // Cancela se usuário clicar "Cancelar"
  state.todos = state.todos.filter(t => t.id !== id);
  saveTodos();
  renderTodos();
}

/**
 * Inicia modo edição: adiciona classe 'editing' no <li>.
 * CSS esconde .todo-text e mostra .todo-edit-input.
 * Foca no input e coloca cursor no final.
 * @param {HTMLElement} todoEl - O <li> da tarefa
 * @param {Object} todo - Objeto tarefa
 */
function startEdit(todoEl, todo) {
  todoEl.classList.add('editing');
  const input = todoEl.querySelector('.todo-edit-input');
  input.focus();
  // setSelectionRange(pos, pos) coloca cursor no final (pos = length)
  input.setSelectionRange(input.value.length, input.value.length);
}

/**
 * Salva edição da tarefa.
 * Valida vazio, atualiza texto + timestamp, salva, re-renderiza.
 * @param {HTMLElement} todoEl - O <li>
 * @param {Object} todo - Objeto tarefa
 * @param {string} newText - Novo texto do input
 * @returns {boolean} true se salvou, false se inválido
 */
function saveEdit(todoEl, todo, newText) {
  const trimmed = newText.trim();
  if (!trimmed) {
    showError('Tarefa não pode ser vazia');
    return false;
  }
  clearError();
  todo.texto = trimmed;
  todo.atualizadaEm = new Date().toISOString();
  saveTodos();
  renderTodos(); // Re-renderiza sai do modo edição (remove classe 'editing')
  return true;
}

/** Cancela edição: apenas re-renderiza (volta ao estado normal) */
function cancelEdit() {
  renderTodos();
}

/** ESC global para cancelar edição */
function handleKeydown(e) {
  if (e.key === 'Escape') {
    cancelEdit();
  }
}

// ------------------------------------------------------------------
// EVENT LISTENERS (Ligações UI → Lógica)
// ------------------------------------------------------------------

/**
 * Configura todos os ouvintes de eventos.
 * Usamos delegação de eventos na <ul> (list) para:
 * - Checkbox, botão editar, botão excluir
 * - Um único listener para todos os itens (presente e futuros)
 */
function initEventListeners() {
  // --- Submit do formulário (Adicionar) ---
  elements.form.addEventListener('submit', e => {
    e.preventDefault(); // Impede reload da página (comportamento padrão de form)
    addTodo(elements.input.value);
  });

  // Limpa erro enquanto digita
  elements.input.addEventListener('input', clearError);

  // --- Delegação de CLICK na lista (checkbox, editar, excluir) ---
  elements.list.addEventListener('click', e => {
    // closest sobe na árvore até achar .todo-item (ou null)
    const todoEl = e.target.closest('.todo-item');
    if (!todoEl) return; // Clique fora de item
    const id = todoEl.dataset.id; // Pega ID guardado no data-id

    // Verifica QUAL elemento foi clicado via seletores CSS
    if (e.target.matches('.todo-checkbox')) {
      toggleTodo(id);
    } else if (e.target.closest('.icon-btn.delete')) {
      deleteTodo(id);
    } else if (e.target.closest('.icon-btn.edit')) {
      const todo = state.todos.find(t => t.id === id);
      if (todo) startEdit(todoEl, todo);
    }
  });

  // --- Teclado DENTRO do input de edição (Enter/Escape) ---
  elements.list.addEventListener('keydown', e => {
    const todoEl = e.target.closest('.todo-item');
    if (!todoEl) return;
    const id = todoEl.dataset.id;
    const todo = state.todos.find(t => t.id === id);
    if (!todo) return;

    // Só age se o foco estiver no input de edição
    if (e.target.matches('.todo-edit-input')) {
      if (e.key === 'Enter') {
        e.preventDefault(); // Evita submit do form se estiver dentro
        saveEdit(todoEl, todo, e.target.value);
      } else if (e.key === 'Escape') {
        cancelEdit();
      }
    }
  });

  // --- Blur (perdeu foco) no input de edição = salva ---
  elements.list.addEventListener('focusout', e => {
    if (e.target.matches('.todo-edit-input')) {
      const todoEl = e.target.closest('.todo-item');
      if (!todoEl) return;
      const id = todoEl.dataset.id;
      const todo = state.todos.find(t => t.id === id);
      if (todo) saveEdit(todoEl, todo, e.target.value);
    }
  });

  // --- Botões de filtro (Todas/Pendentes/Concluídas) ---
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  // ESC global
  document.addEventListener('keydown', handleKeydown);
}

// ------------------------------------------------------------------
// INICIALIZAÇÃO
// ------------------------------------------------------------------

/** Função principal de boot - roda uma vez ao carregar */
function init() {
  loadTodos();           // 1. Carrega do localStorage
  initEventListeners();  // 2. Liga eventos
  renderTodos();         // 3. Desenha UI inicial
}

// DOMContentLoaded = HTML parseado, DOM pronto (antes de imagens/CSS)
document.addEventListener('DOMContentLoaded', init);