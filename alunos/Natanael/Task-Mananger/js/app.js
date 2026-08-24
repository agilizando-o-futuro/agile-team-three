/**
 * Lógica principal da aplicação e manipulação do DOM.
 * Requer: TaskStorage (storage.js) e AIAgent (agent.js) carregados previamente.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa ícones Lucide
    lucide.createIcons();

    // Estado local da aplicação
    let tasks = TaskStorage.getTasks();

    // Elementos DOM - Formulário
    const taskForm = document.getElementById('task-form');
    const titleInput = document.getElementById('task-title');
    const priorityInput = document.getElementById('task-priority');
    const descInput = document.getElementById('task-desc');

    // Elementos DOM - Lista e Filtros
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    const filterStatus = document.getElementById('filter-status');
    const filterPriority = document.getElementById('filter-priority');

    // Elementos DOM - IA
    const askAgentBtn = document.getElementById('ask-agent-btn');
    const apiKeyInput = document.getElementById('api-key-input');
    const agentResponseContent = document.getElementById('agent-response-content');
    const agentTyping = document.getElementById('agent-typing');

    // === Event Listeners ===

    taskForm.addEventListener('submit', handleAddTask);
    filterStatus.addEventListener('change', renderTasks);
    filterPriority.addEventListener('change', renderTasks);
    askAgentBtn.addEventListener('click', handleAskAgent);

    // === Funções de CRUD ===

    function handleAddTask(e) {
        e.preventDefault();
        
        const newTask = {
            id: TaskStorage.generateId(),
            title: titleInput.value.trim(),
            description: descInput.value.trim(),
            priority: priorityInput.value,
            status: 'pendente',
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
        TaskStorage.saveTasks(tasks);
        
        taskForm.reset();
        priorityInput.value = 'media';
        
        renderTasks();
    }

    function deleteTask(id) {
        tasks = tasks.filter(t => t.id !== id);
        TaskStorage.saveTasks(tasks);
        renderTasks();
    }

    function updateTaskStatus(id, newStatus) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.status = newStatus;
            TaskStorage.saveTasks(tasks);
            renderTasks();
        }
    }

    // Exportar funções para o escopo global para serem chamadas nos elementos gerados
    window.appDeleteTask = deleteTask;
    window.appUpdateStatus = updateTaskStatus;

    // === Funções de Renderização ===

    function renderTasks() {
        taskList.innerHTML = '';
        
        const fStatus = filterStatus.value;
        const fPriority = filterPriority.value;

        const filteredTasks = tasks.filter(task => {
            const matchStatus = fStatus === 'todos' || task.status === fStatus;
            const matchPriority = fPriority === 'todas' || task.priority === fPriority;
            return matchStatus && matchPriority;
        });

        if (filteredTasks.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            filteredTasks.forEach(task => {
                const card = document.createElement('article');
                card.className = 'task-card';
                card.setAttribute('aria-label', `Tarefa: ${task.title}`);
                
                // Opções do Select
                const statusOptions = `
                    <option value="pendente" ${task.status === 'pendente' ? 'selected' : ''}>Pendente</option>
                    <option value="andamento" ${task.status === 'andamento' ? 'selected' : ''}>Em Andamento</option>
                    <option value="concluida" ${task.status === 'concluida' ? 'selected' : ''}>Concluída</option>
                `;

                card.innerHTML = `
                    <div class="task-header">
                        <h3 class="task-title">${escapeHTML(task.title)}</h3>
                    </div>
                    <p class="task-desc">${escapeHTML(task.description || 'Sem descrição.')}</p>
                    <div class="badges">
                        <span class="badge priority-${task.priority}">Prioridade: ${task.priority}</span>
                    </div>
                    <div class="task-actions">
                        <select class="status-select" aria-label="Atualizar status da tarefa" onchange="window.appUpdateStatus('${task.id}', this.value)">
                            ${statusOptions}
                        </select>
                        <button class="btn-icon" aria-label="Excluir tarefa" onclick="window.appDeleteTask('${task.id}')">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                `;
                taskList.appendChild(card);
            });
        }
        
        // Reinicializa os ícones gerados dinamicamente
        lucide.createIcons();
    }

    // === Função de Comunicação com a IA ===

    async function handleAskAgent() {
        const apiKey = apiKeyInput.value.trim();
        
        if (!apiKey) {
            alert("Por favor, insira sua chave de API da OpenAI no painel lateral.");
            apiKeyInput.focus();
            return;
        }

        // UX de loading
        askAgentBtn.disabled = true;
        agentResponseContent.classList.add('hidden');
        agentTyping.classList.remove('hidden');

        try {
            // Repassa as tarefas pendentes
            const pendingTasks = tasks.filter(t => t.status !== 'concluida');
            const response = await AIAgent.getSuggestions(pendingTasks, apiKey);
            
            // Formatando a resposta substituindo quebras de linha por <br>
            agentResponseContent.innerHTML = response.replace(/\n/g, '<br>');
        } catch (error) {
            agentResponseContent.innerHTML = `<span style="color: var(--accent-red)">Erro ao consultar o agente: ${error.message}</span>`;
        } finally {
            askAgentBtn.disabled = false;
            agentTyping.classList.add('hidden');
            agentResponseContent.classList.remove('hidden');
        }
    }

    // Helper de segurança para evitar XSS básico
    function escapeHTML(str) {
        const div = document.createElement('div');
        div.innerText = str;
        return div.innerHTML;
    }

    // Inicialização final
    renderTasks();
});
