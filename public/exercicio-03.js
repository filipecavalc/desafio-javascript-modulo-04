function adicionaLoadingLista() {
    var ul = criaLoadingLista();
    document.getElementById('exercicio 2 e 3').appendChild(ul);
}

function criaLoadingLista() {
    verificaListaAntigaExiste();
    var UL = criaULRepositorios();
    UL.appendChild(criaLILoading());
    return UL;
}

function criaLILoading() {
    var LI = document.createElement('li');
    LI.setAttribute('id', 'lista repositorios');
    LI.innerHTML = 'Loading...'
    return LI;
}

function retornaMensagemErroUsuarioNaoEncontrado(params) {
    alert('O usuario pesquisado não existe');
    verificaListaAntigaExiste();
}