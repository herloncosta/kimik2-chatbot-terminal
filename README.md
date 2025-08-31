# Integrando IA Gratuita em seus Projetos Node.js

## Introdução

Imagine poder adicionar inteligência artificial ao seu projeto pessoal sem gastar um centavo. Neste tutorial, vou te mostrar como implementar uma integração com a API gratuita da Moonshot AI (Kimi) usando OpenRouter - uma solução perfeita para desenvolvedores iniciantes que querem experimentar IA sem compromisso financeiro.

## Objetivo do Tutorial

Ao final deste guia, você terá:
- Um projeto Node.js funcional com IA integrada
- Entendimento de como usar APIs de IA gratuitas
- Um template reutilizável para futuros projetos

## Pré-requisitos

- Node.js 18+ instalado
- NPM ou Yarn
- Uma conta no [OpenRouter](https://openrouter.ai)

### Exemplo de Uso

```javascript
import { chatComIA } from "./index.js";

/**
 * Demonstra diferentes casos de uso da IA
 */
async function demonstrarCasosDeUso() {
  console.log("🧪 Demonstrando casos de uso da IA\n");

  const exemplos = [
    "Explique o que é um servidor Node.js em termos simples",
    "Escreva uma função JavaScript para calcular o fatorial de um número",
    "Dê dicas para um iniciante em programação",
    "Qual é a diferença entre let, const e var?"
  ];

  for (const exemplo of exemplos) {
    console.log(`\n❓ Pergunta: ${exemplo}`);
    const resposta = await chatComIA(exemplo);
    console.log(`💡 Resposta: ${resposta}\n`);
    console.log("─".repeat(50));
  }
}

// Executar demonstração
demonstrarCasosDeUso().catch(console.error);
```

## Como Executar Seu Projeto

### Instalação
```bash
npm install
```

### Modo Interativo (Chat)
```bash
npm start
```

### Modo Demonstração
```bash
node --env-file=.env src/exemplos.js
```

### Modo Desenvolvimento (com auto-reload)
```bash
npm run dev
```

## Personalizando para Seu Projeto

### Adicionando Contexto ao Chat

Você pode melhorar as respostas adicionando contexto ao sistema:

```javascript
messages: [
  {
    role: "system",
    content: "Você é um assistente especializado em JavaScript. Responda de forma didática e com exemplos práticos."
  },
  {
    role: "user",
    content: mensagem,
  }
]
```

### Criando uma API Simples

Para usar em uma aplicação web, crie `src/server.js`:

```javascript
import express from "express";
import { chatComIA } from "./index.js";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await chatComIA(message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

## Limites e Boas Práticas

### Limites do Plano Gratuito
- **15 requisições por dia**
- **Resposta limitada a 1000 tokens**
- **Modelo específico: moonshotai/kimi-k2:free**

### Boas Práticas
1. **Cache de respostas**: Armazene respostas frequentes
2. **Rate limiting**: Implemente limitação de taxa no seu app
3. **Tratamento de erros**: Sempre capture e trate erros
4. **Logs**: Monitore o uso da API

## Solução de Problemas Comuns

### Erro 401 (Unauthorized)
```bash
# Verifique sua chave API
echo $OPEN_ROUTER_API_KEY
# Ou no Windows:
echo %OPEN_ROUTER_API_KEY%
```

### Erro de CORS (em navegadores)
Use um proxy ou implemente no backend, uma opção comum é usar a lib cors do node.js.

### Limite de Taxa Excedido
Implemente backoff exponencial:
```javascript
await new Promise(resolve => setTimeout(resolve, 2000));
```

## Conclusão

Parabéns! Você agora tem um projeto Node.js completamente funcional com IA integrada. Este tutorial te deu uma base sólida para explorar o mundo da inteligência artificial em seus projetos pessoais.

Lembre-se: a chave para o sucesso é experimentar, errar e aprender. Use este código como ponto de partida e adapte-o às suas necessidades!

### Recursos Adicionais
- [Documentação OpenRouter](https://openrouter.ai/docs)

Bora pra cima! 🚀