function promiseChecaIdade() {
    var idade = document.getElementById('idade').value;

    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve('Maior que 18');
        } else {
            reject('Menor que 18')
        }
    });
}

function mostraResultadoPromiseIdade() {
    promiseChecaIdade()
        .then(function (response) {
            alert(response);
        })
        .catch(function (error) {
            alert(error);
        })
}