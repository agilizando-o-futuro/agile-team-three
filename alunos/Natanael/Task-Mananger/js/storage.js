/**
 * Módulo responsável por gerenciar a persistência de dados no LocalStorage.
 */
const TaskStorage = (function() {
    const STORAGE_KEY = 'luna_ai_task_manager_data_v2';

    return {
        /**
         * Retorna a lista de tarefas salva ou um array vazio.
         */
        getTasks: function() {
            try {
                const data = localStorage.getItem(STORAGE_KEY);
                return data ? JSON.parse(data) : [];
            } catch (error) {
                console.error("Erro ao ler do localStorage", error);
                return [];
            }
        },

        /**
         * Salva o array de tarefas no LocalStorage.
         */
        saveTasks: function(tasks) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
            } catch (error) {
                console.error("Erro ao salvar no localStorage", error);
            }
        },

        /**
         * Gera um ID único simples.
         */
        generateId: function() {
            return Date.now().toString(36) + Math.random().toString(36).substring(2);
        }
    };
})();
