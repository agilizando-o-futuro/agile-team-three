# Projeto 01 — Calculadora Inteligente

## Descrição
Uma calculadora web que além de realizar operações básicas (soma, subtração, multiplicação, divisão), **explica o passo a passo** do cálculo usando IA.

## Requisitos Funcionais
- [ ] Interface com display e botões numéricos/operações
- [ ] Operações: +, -, *, /
- [ ] Botão "Explicar" que envia a expressão para um LLM e mostra a explicação
- [ ] Histórico de cálculos realizados
- [ ] Botão de limpar (C) e apagar (CE)

## Requisitos Técnicos
- HTML, CSS e JavaScript puro (sem frameworks)
- Design responsivo
- CSS Grid ou Flexbox para o layout
- Consumo de API de LLM (OpenAI/Anthropic) para explicações

## Entregáveis
- `index.html`
- `style.css`
- `script.js`
- `README.md` explicando o projeto

## Sugestão de Uso dos Agentes

```bash
# Planejamento
opencode "professor" "Me ajude a planejar o HTML da calculadora, quais elementos vou precisar?"

# Implementação
opencode "tutor-js" "Como faço para capturar clique dos botões e montar a expressão?"

# Integração com IA
opencode "tutor-ia" "Como fazer uma requisição fetch para a API do ChatGPT explicar um cálculo?"

# Revisão
opencode "revisor" "Revise meu código: [cole aqui]"
```
