# Projeto 02 — Chatbot Simples

## Descrição
Um chatbot web que se comunica com uma API de LLM. O usuário digita mensagens e o assistente responde com a ajuda de um "system prompt" configurável.

## Requisitos Funcionais
- [ ] Interface de chat (mensagens alinhadas à esquerda/direita)
- [ ] Campo de texto e botão de envio
- [ ] Respostas usando API de LLM (streaming opcional)
- [ ] Configuração de system prompt pelo usuário
- [ ] Histórico da conversa visível
- [ ] Indicador de "digitando..."

## Requisitos Técnicos
- HTML, CSS e JavaScript puro
- Scroll automático para novas mensagens
- Responsivo (funciona no mobile)
- Tecla Enter para enviar

## Entregáveis
- `index.html` / `style.css` / `script.js`
- Opção de inserir API key do usuário

## Desafios Extras
- Adicionar suporte a markdown nas respostas
- Permitir escolher entre múltiplos modelos
- Adicionar botão de "copiar resposta"

## Sugestão de Uso dos Agentes

```bash
opencode "tutor-js" "Como criar um layout de chat com CSS? Quero mensagens do usuário à direita e do bot à esquerda"

opencode "tutor-ia" "Como lidar com streaming de resposta da API da OpenAI?"

opencode "revisor" "Revise meu código do chatbot"
```
