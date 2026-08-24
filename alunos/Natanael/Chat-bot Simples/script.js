// Inicializa ícones Lucide
lucide.createIcons();

// Elementos da DOM
const chatHistory = document.getElementById('chat-history');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const apiKeyInput = document.getElementById('api-key');
const modelSelect = document.getElementById('model-select');
const systemPromptInput = document.getElementById('system-prompt');
const clearChatBtn = document.getElementById('clear-chat-btn');
const typingIndicator = document.getElementById('typing-indicator');

// Estado da aplicação
let messages = [];

// Auto-resize do textarea
messageInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight < 150 ? this.scrollHeight : 150) + 'px';
});

// Enviar com Enter (sem Shift)
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

sendBtn.addEventListener('click', sendMessage);
clearChatBtn.addEventListener('click', clearChat);

function clearChat() {
    messages = [];
    chatHistory.innerHTML = '';
    addSystemMessage('Conversa limpa. Pronto para iniciar um novo diálogo.');
}

async function sendMessage() {
    const text = messageInput.value.trim();
    const apiKey = apiKeyInput.value.trim();
    const model = modelSelect.value;
    const systemPrompt = systemPromptInput.value.trim();

    if (!text) return;

    if (!apiKey) {
        alert("Por favor, insira sua API Key da OpenAI nas configurações antes de enviar mensagens.");
        apiKeyInput.focus();
        return;
    }

    // 1. Adiciona e renderiza mensagem do usuário
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    appendMessageToDOM('user', text);
    messages.push({ role: 'user', content: text });
    
    scrollToBottom();

    // 2. Mostra indicador de digitando
    typingIndicator.classList.remove('hidden');
    scrollToBottom();

    // 3. Monta o payload de histórico para a API
    const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...messages
    ];

    try {
        // 4. Chama a API da OpenAI
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: apiMessages,
                temperature: 0.7
            })
        });

        typingIndicator.classList.add('hidden');

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || `Erro HTTP ${response.status}`);
        }

        const data = await response.json();
        const botReply = data.choices[0].message.content;

        // 5. Salva e renderiza resposta do bot
        messages.push({ role: 'assistant', content: botReply });
        appendMessageToDOM('assistant', botReply);

    } catch (error) {
        typingIndicator.classList.add('hidden');
        appendSystemMessage(`❌ Falha na conexão com a API: ${error.message}`);
    }
    
    scrollToBottom();
}

function appendMessageToDOM(role, content) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(role === 'user' ? 'msg-user' : 'msg-bot');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');

    // Suporte a Markdown para o Bot usando marked.js
    if (role === 'assistant') {
        contentDiv.innerHTML = marked.parse(content);
        
        // Desafio Extra: Botão de copiar resposta
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<i data-lucide="copy" width="14" height="14"></i> Copiar';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(content).then(() => {
                const originalHtml = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i data-lucide="check" width="14" height="14"></i> Copiado!';
                lucide.createIcons();
                setTimeout(() => {
                    copyBtn.innerHTML = originalHtml;
                    lucide.createIcons();
                }, 2000);
            });
        };
        msgDiv.appendChild(copyBtn);
    } else {
        // Texto puro para o usuário, previne injeção HTML
        contentDiv.textContent = content;
    }

    msgDiv.prepend(contentDiv);
    chatHistory.appendChild(msgDiv);
    
    if (role === 'assistant') lucide.createIcons();
}

function addSystemMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message system-msg';
    msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatHistory.appendChild(msgDiv);
    scrollToBottom();
}

function scrollToBottom() {
    chatHistory.scrollTo({
        top: chatHistory.scrollHeight,
        behavior: 'smooth'
    });
}
