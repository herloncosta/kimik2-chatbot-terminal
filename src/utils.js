import readline from "node:readline";

/**
 * Cria uma interface readline para interação no terminal
 * @returns {readline.Interface} Interface readline
 */
export const createReadLineInterface = () => {
	return readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
};

/**
 * Formata texto para melhor visualização no terminal
 * @param {string} text - Texto a ser formatado
 * @param {number} maxWidth - Largura máxima da linha
 * @returns {string} Texto formatado
 */
export const formatText = (text, maxWidth = 80) => {
	const words = text.split(" ");
	const lines = [];
	let currentLine = "";

	for (const word of words) {
		if ((currentLine + word).length <= maxWidth) {
			currentLine += (currentLine ? " " : "") + word;
		} else {
			if (currentLine) lines.push(currentLine);
			currentLine = word;
		}
	}

	if (currentLine) lines.push(currentLine);
	return lines.join("\n");
};

/**
 * Mostra uma animação de loading no terminal
 * @param {string} message - Mensagem a ser exibida
 * @param {number} duration - Duração em milissegundos
 */
export const showLoading = async (message, duration = 1000) => {
	const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧"];
	let i = 0;

	const interval = setInterval(() => {
		process.stdout.write(`\r${frames[i]} ${message}`);
		i = (i + 1) % frames.length;
	}, 100);

	await new Promise((resolve) => setTimeout(resolve, duration));
	clearInterval(interval);
	process.stdout.write("\r");
};
