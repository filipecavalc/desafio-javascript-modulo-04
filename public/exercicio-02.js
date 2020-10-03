var ulElement = document.querySelector('ul');

function getOnGit() {
    var inputUser = document.getElementById('gitUser').value;

    axios.get('https://api.github.com/users/' + inputUser + '/repos')
        .then(function (response) {
            for (repo of response.data) {
                listRepo(repo.name)
            }
        })
        .catch(function (error) {
            console.warn(error);
        })
}


function listRepo(repoName) {
    var repoNameTxt = document.createTextNode(repoName)
    var listElement = document.createElement('li');
    listElement.appendChild(repoNameTxt)
    ulElement.appendChild(listElement)
}