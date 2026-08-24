/**
 * Módulo responsável pela comunicação com o LLM.
 */
const AIAgent = (function() {
    const API_URL = 'https://api.openai.com/v1/chat/completions';

    return {
        /**
         * Envia as tarefas atuais para a IA e retorna sugestões.
         */
        getSuggestions: async function(tasks, apiKey) {
            if (!apiKey) {
                throw new Error("API Key não informada. Configure a chave na barra lateral.");
            }

            if (tasks.length === 0) {
                return "O backlog está vazio. Adicione algumas tarefas para que eu possa ajudar na priorização e produtividade.";
            }

            // Prepara um resumo das tarefas para economizar tokens
            const tasksSummary = tasks.map(t => 
                `- [${t.priority.toUpperCase()}] ${t.title} (Status: ${t.status}) | Detalhes: ${t.description || 'Nenhum'}`
            ).join('\n');

            const systemPrompt = `Você é um assistente de produtividade. Analise as tarefas do usuário. 
Seu objetivo é:
1. Sugerir qual tarefa deve ser feita primeiro e por quê (focando em prioridades altas).
2. Dar uma dica curta de produtividade.
Seja direto e profissional. Não use formatação markdown excessiva.`;

            const payload = {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Aqui está meu backlog atual:\n\n${tasksSummary}\n\nO que você sugere que eu ataque primeiro e como?` }
                ],
                temperature: 0.7,
                max_tokens: 300
            };

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.error?.message || `Erro HTTP: ${response.status}`);
                }

                const data = await response.json();
                return data.choices[0].message.content;
            } catch (error) {
                console.error("Erro no AIAgent:", error);
                throw error;
            }
        }
    };
})();
