function realizarSorteio(){
    let numerosSorteados = [];

    while(numerosSorteados.length < 6){
        // gera um numero aleatorio de 0 a 100
        let numeroAleatorio = Math.floor(Math.random() * 60) + 1;

        if(!numerosSorteados .includes(numeroAleatorio)){
            numerosSorteados.push(numeroAleatorio);
        }
    }
    //exibir numeros na pagina html

    document.getElementById('numerosSorteados').textContent = numerosSorteados.join(',');
}