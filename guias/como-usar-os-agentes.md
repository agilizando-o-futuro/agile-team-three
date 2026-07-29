# Como Usar os Agentes

## Pré-requisito
Você precisa ter o opencode instalado. Ele já vem configurado neste repositório.

## Comandos Básicos

### Chamar um agente específico
```bash
opencode "professor" "Explique o que é closure em JavaScript"
```

### Chamar sem especificar agente (modo conversa livre)
```bash
opencode "Me ajude a debugar esse código..."
```

### Pedir revisão de código
```bash
opencode "revisor" "Revise este código: function soma(a,b){return a+b}"
```

## Agentes Disponíveis

| Agente | Quando usar |
|--------|-------------|
| `professor` | Para aprender conceitos novos |
| `tutor-js` | Para dúvidas de JavaScript, HTML, CSS |
| `tutor-ia` | Para prompts, APIs de LLM, agentes |
| `revisor` | Para revisar código antes de entregar |

## Dicas
- Seja específico nas perguntas — melhores perguntas geram melhores respostas
- Se um agente não responder bem, tente outro ou reformule
- Use o `professor` para simplificar conceitos complexos
- Sempre entenda o código antes de usar — não copie cegamente
