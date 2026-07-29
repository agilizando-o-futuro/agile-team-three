# Boas Práticas — Desenvolvimento com IA

## 1. Nunca confie cegamente
IA gera respostas com confiança mesmo quando errada. Sempre:
- Leia e entenda o código gerado
- Teste em diferentes cenários
- Verifique segurança (inputs do usuário, SQL injection, XSS)

## 2. Seja específico nos prompts
Quanto mais contexto e detalhe, melhor a resposta.
- ❌ "Faz um site"
- ✅ "Crie uma página HTML com um formulário de login, CSS centralizado, e validação JS dos campos email e senha"

## 3. Itere, não aceite a primeira resposta
Use o feedback do agente para refinar:
```
1ª tentativa: "Gere uma calculadora"
2ª: "Adicione botão de explicação que chama uma API"
3ª: "Deixe responsivo com media queries"
```

## 4. Use agentes especializados para cada fase
- `professor` para planejamento/entendimento
- `tutor-js` para implementação
- `revisor` para qualidade

## 5. Documente os prompts usados
Guardar os prompts que funcionaram bem ajuda você e seus colegas.

## 6. Questione e explore
Pergunte "por que?" para o agente. Entender o motivo é mais importante que o código pronto.
