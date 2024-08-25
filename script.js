function escolherOpcao(opcao) {
    switch(opcao) {
        case 'arroz':
            console.log("Você escolheu a opção A");
            break;
        case 'trigo':
            console.log("Você escolheu a opção B");
            break;
        case 'banana':
            console.log("Você escolheu a opção C");
            break;
        default:
            console.log("Opção inválida");
    }
}

// Exemplo de uso
escolherOpcao('A'); // Saída: Você escolheu a opção A
escolherOpcao('B'); // Saída: Você escolheu a opção B
escolherOpcao('X'); // Saída: Opção inválida
