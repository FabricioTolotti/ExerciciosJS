function intercalarPalavras() {
    // Obtendo as palavras dos campos de entrada
    var palavra1 = document.getElementById('palavra1').value;
    var palavra2 = document.getElementById('palavra2').value;

    // Verificando se as palavras foram inseridas
    if (palavra1.length === 0 || palavra2.length === 0) {
        alert('Por favor, insira duas palavras.');
        return;
    }

    // Intercale as palavras
    var resultado = '';
    var maxLength = Math.max(palavra1.length, palavra2.length);
    for (var i = 0; i < maxLength; i++) {
        if (i < palavra1.length) {
            resultado += palavra1[i];
        }
        if (i < palavra2.length) {
            resultado += palavra2[i];
        }
    }

    // Defina o resultado no campo de resultado
    document.getElementById('resultado').value = resultado;
}