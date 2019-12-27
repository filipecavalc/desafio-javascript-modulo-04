function promiseConsultaRepositoriosGithubProfile() {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + document.getElementById('user').value + '/repos');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('erro na requisição');
                }
            }
        }
    });
}

function mostraResultadoConsultaRepositoriosGithubProfile() {
    adicionaLoadingLista();
    promiseConsultaRepositoriosGithubProfile()
        .then(function (response) {
            criaListaRepositoriosGithubProfile(response);
        })
        .catch(function (error) {
            console.log(error);
            retornaMensagemErroUsuarioNaoEncontrado();
        });
}

function criaListaRepositoriosGithubProfile(response) {
    var UL = criaULRepositorios();
    verificaListaAntigaExiste();
    response.forEach(item => {
        var li = CriaLIRepositorio(item);
        UL.appendChild(li);
    });
    document.getElementById('exercicio 2 e 3').appendChild(UL);
}

function criaULRepositorios() {
    var UL = document.createElement('ul');
    UL.setAttribute('id', 'lista repositorios');
    return UL;
}

function CriaLIRepositorio(item) {
    var LI = document.createElement('li');
    LI.setAttribute('id', item.id);
    LI.innerHTML = item.name;
    return LI;
}