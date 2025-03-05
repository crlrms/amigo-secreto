
let nomes = [];

function adicionar(){
    let nome = document.getElementById('nome').value;
    if (nome != ''){
        nomes.push(nome);
        document.getElementById('nome').value = '';
        let = listaNomes = nomes.join('<br>');
        document.getElementById('mostraNome').innerHTML = listaNomes;
    } else {
        alert("Nome inválido!")
    }
    document.getElementById('nome').focus();
}

function addEnter(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        adicionar();
    }
}

function sortear(){
    if(nomes.length === 0){
        alert("Nenhum nome foi adicionado!");
        return;
    } else {
    let indiceSorteado = Math.floor(Math.random() * nomes.length);
    let sorteado = nomes[indiceSorteado];

    document.getElementById('mostraNomeSorteado').innerHTML = (`Nome sorteado: ${sorteado}`);

    nomes.splice(indiceSorteado, 1);
    document.getElementById('mostraNome').innerHTML = nomes.join('<br>');
    }
}

function resetar() {
    nomes = [];
    document.getElementById('mostraNome').innerHTML = '';
    document.getElementById('mostraNomeSorteado').innerHTML = '';
    document.getElementById('nome').focus();
}