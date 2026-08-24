class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
    }

    clearEntry() {
        this.currentOperand = '0';
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        let opSymbol = this.operation;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    alert("Não é possível dividir por zero!");
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        // Armazena a última expressão para o Histórico e para a IA
        window.lastExpression = `${prev} ${opSymbol} ${current} = ${computation}`;
        addToHistory(window.lastExpression);

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        if (stringNumber === '0') return '0';
        
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay},${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.getElementById('btn-equal');
const clearButton = document.getElementById('btn-c');
const clearEntryButton = document.getElementById('btn-ce');
const explainButton = document.getElementById('btn-explain');
const previousOperandElement = document.getElementById('previous-operand');
const currentOperandElement = document.getElementById('current-operand');
const historyList = document.getElementById('history-list');
const explanationContent = document.getElementById('explanation-content');

const calculator = new Calculator(previousOperandElement, currentOperandElement);
window.lastExpression = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operation);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

clearEntryButton.addEventListener('click', () => {
    calculator.clearEntry();
    calculator.updateDisplay();
});

// Teclado físico
document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9 || e.key === '.') {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    }
    if (e.key === '=' || e.key === 'Enter') {
        calculator.compute();
        calculator.updateDisplay();
    }
    if (e.key === 'Backspace') {
        calculator.clearEntry();
        calculator.updateDisplay();
    }
    if (e.key === 'Escape') {
        calculator.clear();
        calculator.updateDisplay();
    }
    if (['+', '-', '*', '/'].includes(e.key)) {
        let op = e.key === '/' ? '÷' : e.key;
        calculator.chooseOperation(op);
        calculator.updateDisplay();
    }
});

function addToHistory(expression) {
    const li = document.createElement('li');
    li.innerText = expression;
    historyList.prepend(li); // Adiciona no topo
}

// Integração com LLM (Inteligência Artificial)
explainButton.addEventListener('click', async () => {
    if (!window.lastExpression) {
        explanationContent.innerText = "Nenhuma operação encontrada! Realize um cálculo primeiro para obter uma explicação.";
        return;
    }

    explanationContent.innerHTML = `<span class="loading">Pensando e gerando explicação para: ${window.lastExpression}...</span>`;

    // ---------------------------------------------------------
    // CONFIGURAÇÃO DA API
    // Substitua 'SUA_CHAVE_API_AQUI' pela sua API key real.
    // ---------------------------------------------------------
    const API_KEY = 'SUA_CHAVE_API_AQUI'; 

    // Modo de demonstração local se não houver chave real configurada
    if (API_KEY === 'SUA_CHAVE_API_AQUI') {
        setTimeout(() => {
            explanationContent.innerHTML = `
<strong style="color:white">Expressão avaliada:</strong> ${window.lastExpression}

<span style="color:#f87171">[Aviso: API Key não configurada]</span> 

Para ver explicações reais geradas por IA, edite o arquivo <code>script.js</code> e insira sua chave da OpenAI na variável <code>API_KEY</code>.

<em>Exemplo do que a IA diria:</em>
"Primeiro, identificamos a operação e os operandos. Neste caso, pegamos o valor inicial e aplicamos a operação escolhida em relação ao segundo valor. O resultado final corresponde à totalidade após a execução matemática."
            `;
        }, 800);
        return;
    }

    // Chamada real à API
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "Você é um professor de matemática paciente e didático. Responda em português. Formate bem a resposta com passos claros."
                    },
                    {
                        role: "user",
                        content: `Explique detalhadamente, passo a passo, como resolver esta conta: ${window.lastExpression}.`
                    }
                ],
                temperature: 0.7,
                max_tokens: 250
            })
        });

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        explanationContent.innerText = data.choices[0].message.content;
    } catch (error) {
        console.error("Erro na comunicação com a API:", error);
        explanationContent.innerHTML = `<span style="color: #ef4444">Erro ao buscar explicação: Verifique a conexão e sua Chave de API no console.</span>`;
    }
});