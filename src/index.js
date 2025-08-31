import OpenAI from "openai";
import readline from "node:readline";

const openai = new OpenAI({
	baseURL: "https://openrouter.ai/api/v1",
	apiKey: process.env.OPEN_ROUTER_API_KEY,
	defaultHeaders: {
		"HTTP-Referer": "http://herloncosta.dev",
		"X-Title": "Free-Chatbot-KimiK2",
	},
});

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/**
 * Função para fazer perguntas ao usuário
 * @param {string} pergunta - Pergunta a ser exibida
 * @returns {Promise<string>} - Resposta do usuário
 */
function fazerPergunta(pergunta) {
	return new Promise((resolve) => {
		rl.question(pergunta, resolve);
	});
}

/**
 * Função principal de chat com IA
 * @param {string} mensagem - Mensagem do usuário
 * @returns {Promise<string>} - Resposta da IA
 */
async function chatComIA(mensagem) {
	try {
		const response = await openai.chat.completions.create({
			model: "moonshotai/kimi-k2:free",
			messages: [{ role: "user", content: mensagem }],
			max_tokens: 1000,
			temperature: 0.7,
		});

		return response.choices[0].message.content;
	} catch (error) {
		console.error("Erro:", error.message);
		return "Desculpe, ocorreu um erro ao processar sua pergunta.";
	}
}

async function iniciarChat() {
	console.log("\nKimiK2 Chatbot");
	console.log("💭 Digite 'sair' para encerrar\n");

	while (true) {
		const pergunta = await fazerPergunta("Você: ");

		if (pergunta.toLowerCase() === "sair") {
			console.log("👋 Até logo!");
			rl.close();
			break;
		}

		console.log("\n🤖 Processando...");
		const resposta = await chatComIA(pergunta);
		console.log(`\nIA: ${resposta}\n`);
	}
}

if (!process.env.OPEN_ROUTER_API_KEY) {
	console.error("Erro: OPEN_ROUTER_API_KEY não está definida no arquivo .env");
	process.exit(1);
}

iniciarChat().catch(console.error);
