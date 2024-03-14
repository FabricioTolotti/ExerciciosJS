function inverterNomes() {
    const form = document.getElementById('form');
    const nomes = [];

    // Obter os nomes dos campos do formulário
    for (let i = 0; i < form.length - 1; i++) {
    const nome = form.elements[i].value;
    nomes.push(nome);
    }

    // Inverter a ordem dos nomes
    const nomesInvertidos = nomes.reverse();

    // Exibir os nomes invertidos nos campos do formulário
    for (let i = 0; i < form.length - 1; i++) {
    form.elements[i].value = nomesInvertidos[i];
    }

    // Exibir os nomes invertidos em uma div
    const divNomesInvertidos = document.getElementById('nomesInvertidos');
    divNomesInvertidos.innerHTML = nomesInvertidos.join(', ');
}