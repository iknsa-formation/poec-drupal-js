var prenom = document.getElementById('prenom');
var nom = document.getElementById('nom');
var resultat = document.getElementById('resultat');
var submit = document.getElementById('submit');

function setResult () {
    resultat.innerHTML = prenom.value + ' ' + nom.value;
}

submit.addEventListener('click', function() {
    setResult();
});
