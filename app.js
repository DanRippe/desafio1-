function verificaPalavraPalindromo(palavra) {
    
    palavra = prompt('Digite uma palavra:');
    arrayCharPalavra = palavra.split("");
    //console.log(arrayCharPalavra);
    arrayCharPalavraReverso = arrayCharPalavra.reverse();
    //console.log(arrayCharPalavraReverso);
    palavraReversa = arrayCharPalavraReverso.join("");
    //console.log(palavraReversa);

    if (palavra == palavraReversa) {
        alert(`A palavra ${palavra} é um palíndromo.`);
    } else {
        alert(`A palavra ${palavra} não é um palíndromo.`);
    }
    
}