import { chatComIA } from "./index.js";

/**
 * Demonstra diferentes casos de uso da IA
 */
export const demonstrarCasosDeUso = async () => {
	console.log("🧪 Demonstrando casos de uso da IA\n");

	const exemplos = [
		"Explique o que é um servidor Node.js em termos simples",
		"Escreva uma função JavaScript para calcular o fatorial de um número",
		"Dê dicas para um iniciante em programação",
		"Qual é a diferença entre let, const e var?",
	];

	for (const exemplo of exemplos) {
		console.log(`\n❓ Pergunta: ${exemplo}`);
		const resposta = await chatComIA(exemplo);
		console.log(`💡 Resposta: ${resposta}\n`);
		console.log("─".repeat(50));
	}
};

demonstrarCasosDeUso().catch(console.error);
