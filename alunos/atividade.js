
import OpenAI from "openai";

/*
// 1. Definição das Ferramentas (agora aceitam objetos com argumentos)
const ferramentas = {
  buscar_clima: ({ cidade }) => {
    const dados = { "São Paulo": "22°C, Nublado", "Rio de Janeiro": "30°C, Ensolarado" };
    return dados[cidade] || "Cidade não encontrada.";
  },
  somar: ({ a, b }) => {
    return (Number(a) + Number(b)).toString();
  }
};

async function chamarLLM(prompt) {
  if (!prompt.includes("OBSERVAÇÃO:")) {
    // Retorna a intenção formatada em JSON
    return JSON.stringify({
      tipo: "ACAO",
      ferramenta: "buscar_clima",
      argumentos: { cidade: "São Paulo" }
    });
  }
  
  return JSON.stringify({
    tipo: "RESPOSTA",
    conteudo: "O clima em São Paulo é 22°C e está nublado."
  });
}


function construirPromptSystem(pergunta, historico) {
  return `
Você é um agente ReAct. Responda APENAS em formato JSON válido.

Ferramentas disponíveis:
${JSON.stringify(Object.keys(ferramentas))}

Formatos permitidos:
Para usar ferramenta: {"tipo": "ACAO", "ferramenta": "nome", "argumentos": {...}}
Para responder: {"tipo": "RESPOSTA", "conteudo": "sua resposta final"}

Pergunta: ${pergunta}
Histórico:
${historico}
`.trim();
}

// 4. O Loop ReAct
async function agenteReAct(pergunta, maxIteracoes = 5) {
  let historico = "";

  for (let i = 0; i < maxIteracoes; i++) {
    const prompt = construirPromptSystem(pergunta, historico);
    const respostaRaw = await chamarLLM(prompt);
    
    let decisao;
    try {
      decisao = JSON.parse(respostaRaw);
    } catch {
      historico += `\nOBSERVAÇÃO: A resposta não foi um JSON válido.\n`;
      continue;
    }

    // Processa a RESPOSTA FINAL
    if (decisao.tipo === "RESPOSTA") {
      return decisao.conteudo;
    }

    // Processa a AÇÃO
    if (decisao.tipo === "ACAO") {
      const fn = ferramentas[decisao.ferramenta];
      
      if (fn) {
        const resultado = fn(decisao.argumentos || {});
        console.log(`[Ferramenta ${decisao.ferramenta}]:`, resultado);
        historico += `\nExecutou ${decisao.ferramenta} | OBSERVAÇÃO: ${resultado}\n`;
      } else {
        historico += `\nOBSERVAÇÃO: Ferramenta "${decisao.ferramenta}" não existe.\n`;
      }
    }
  }

  throw new Error("Limite de iterações atingido.");
}

// Execução
(async () => {
  const resposta = await agenteReAct("Qual o clima em São Paulo?");
  console.log("\nResultado Final:", resposta);
})();


// 1. Registro e Definição das Tools (Schemas e Execução)
const ferramentas = {
  buscar_clima: {
    schema: {
      name: "buscar_clima",
      description: "Retorna a previsão do tempo simulada para uma cidade.",
      parameters: {
        type: "object",
        properties: {
          cidade: { type: "string", description: "Nome da cidade" }
        },
        required: ["cidade"]
      }
    },
    execute: ({ cidade }) => {
      const bancoClima = {
        "Curitiba": "14°C, Chuvoso",
        "Salvador": "29°C, Ensolarado",
        "São Paulo": "20°C, Nublado"
      };
      return { cidade, clima: bancoClima[cidade] || "25°C, Ensolarado" };
    }
  },

  converter_moeda: {
    schema: {
      name: "converter_moeda",
      description: "Converte um valor entre duas moedas.",
      parameters: {
        type: "object",
        properties: {
          valor: { type: "number", description: "Valor numérico a converter" },
          de: { type: "string", description: "Código da moeda de origem (ex: USD)" },
          para: { type: "string", description: "Código da moeda de destino (ex: BRL)" }
        },
        required: ["valor", "de", "para"]
      }
    },
    execute: ({ valor, de, para }) => {
      const taxas = { "USD_BRL": 5.20, "EUR_BRL": 5.60, "BRL_USD": 0.19 };
      const chave = `${de.toUpperCase()}_${para.toUpperCase()}`;
      const taxa = taxas[chave] || 1.0;
      return { valorOriginal: valor, de, para, valorConvertido: (valor * taxa).toFixed(2) };
    }
  }
};

// 2. Decisor de Intent (Simula a escolha da Tool que um LLM faria via API)
function decidirTool(pergunta) {
  const p = pergunta.toLowerCase();

  if (p.includes("clima") || p.includes("tempo") || p.includes("temperatura")) {
    const cidade = p.includes("curitiba") ? "Curitiba" : p.includes("salvador") ? "Salvador" : "São Paulo";
    return { name: "buscar_clima", args: { cidade } };
  }

  if (p.includes("converter") || p.includes("dólar") || p.includes("moeda") || p.includes("usd")) {
    return { name: "converter_moeda", args: { valor: 100, de: "USD", para: "BRL" } };
  }

  return null; // Nenhuma tool necessária
}

// 3. Orquestrador do Agente
async function agenteFunctionCalling(pergunta) {
  console.log(`\n-----------------------------------`);
  console.log(`👤 Pergunta: "${pergunta}"`);

  // Passo A: O agente analisa a pergunta em relação aos Schemas disponíveis
  const chamadaTool = decidirTool(pergunta);

  if (!chamadaTool) {
    return "Resposta direta: Não foi necessário acionar nenhuma ferramenta.";
  }

  // Passo B: Execução dinâmica da Tool decidida
  const toolSelecionada = ferramentas[chamadaTool.name];
  console.log(`⚙️ Tool Decidida: [${chamadaTool.name}]`);
  console.log(`📦 Argumentos extraídos:`, chamadaTool.args);

  const resultadoTool = toolSelecionada.execute(chamadaTool.args);
  console.log(`📊 Retorno da Tool:`, resultadoTool);

  // Passo C: Formatação final dos dados para o usuário
  if (chamadaTool.name === "buscar_clima") {
    return `O tempo em ${resultadoTool.cidade} está ${resultadoTool.clima}.`;
  }
  if (chamadaTool.name === "converter_moeda") {
    return `${resultadoTool.valorOriginal} ${resultadoTool.de} equivalem a aproximadamente R$ ${resultadoTool.valorConvertido} (${resultadoTool.para}).`;
  }
}

// Execução de testes
(async () => {
  const r1 = await agenteFunctionCalling("Qual é o clima em Curitiba?");
  console.log(`💬 Resposta: ${r1}`);

  const r2 = await agenteFunctionCalling("Quanto fica converter 100 USD para BRL?");
  console.log(`💬 Resposta: ${r2}`);
})();
/*/





const client = new OpenAI({
  apiKey:"precisa da API"

const agenteA = "Você defende ferozmente que JavaScript é melhor para iniciantes. Seja breve (1 parágrafo).";
const agenteB = "Você defende ferozmente que Python é melhor para iniciantes. Seja breve (1 parágrafo).";

let ultimaFala = "Por que a sua linguagem é melhor para iniciantes do que a outra?";

async function executarDebate() {
  for (let rodada = 1; rodada <= 3; rodada++) {
    console.log(`--- RODADA ${rodada} ---`);

    // Turno Agente A (JS)
    const resA = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: agenteA },
        { role: "user", content: ultimaFala }
      ]
    });
    const textoA = resA.choices[0].message.content;
    console.log(`\n[JS]: ${textoA}`);
    ultimaFala = textoA;

    // Turno Agente B (Python)
    const resB = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: agenteB },
        { role: "user", content: ultimaFala }
      ]
    });
    const textoB = resB.choices[0].message.content;
    console.log(`\n[Python]: ${textoB}\n`);
    ultimaFala = textoB;
  }
}

executarDebate();