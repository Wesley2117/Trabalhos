const readline = require('readline');

// Cria uma interface para receber a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular os dias vivo
const calcularDiasVivo = (dataNascimento) => {
    const dataAtual = new Date();
    const dataNasc = new Date(dataNascimento);
    const diferencaEmMilissegundos = dataAtual - dataNasc;
    const diasVivo = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    
    return diasVivo;
};

// Pergunta ao usuário a data de nascimento
rl.question('Digite sua data de nascimento (formato YYYY-MM-DD): ', (dataNascimento) => {
    // Verifica se a data é válida
    if (isNaN(Date.parse(dataNascimento))) {
        console.log('Formato de data inválido. Use o formato YYYY-MM-DD.');
    } else {
        const diasVivo = calcularDiasVivo(dataNascimento);
        console.log(`Você viveu ${diasVivo} dias.`);
    }

    // Fecha a interface de entrada
    rl.close();
});
