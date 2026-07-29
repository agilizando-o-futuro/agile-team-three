# Exercícios — Padrões de Agentes

## 1 — Agente ReAct Manual
Implemente manualmente o loop ReAct em JavaScript:
1. Crie uma função que recebe uma pergunta
2. Use um prompt que instrua o LLM a responder com `AÇÃO: nome_da_ferramenta` ou `RESPOSTA: ...`
3. Se for ação, execute a ferramenta e volte ao passo 2

## 2 — Agente com Tools
Crie um agente que usa function calling para:
- `buscar_clima(cidade)` — retorna clima simulado
- `converter_moeda(valor, de, para)` — retorna conversão simulada
- O agente deve decidir qual tool chamar baseado na pergunta

## 3 — Agente de Estudo
Crie um agente que:
- Recebe um tópico
- Busca em uma base de conhecimento local (array de objetos)
- Se não encontrar, pergunta ao usuário se quer aprender e adiciona ao banco
- Usa o padrão ReAct

## 4 — Debate entre Agentes
Simule dois agentes com opiniões diferentes debatendo um tópico:
- Agente A: "JavaScript é melhor que Python para iniciantes"
- Agente B: "Python é melhor que JavaScript para iniciantes"
- Use prompts que definam os papéis e faça 3 rodadas de debate

## Entrega
Publique os experimentos em um repositório GitHub e compartilhe o link.
