
function calculatrice () {
    var oper = prompt('Quel type d\'opération soouhaitez-vous réaliser ? : +, -, *, /');
    var nbre1 = parseInt(prompt('la première valeur :'));
    var nbre2 = parseInt(prompt('la deuxième valeur :'));
    var resultat;

    switch (oper) {
        case '+':
            resultat = nbre1 + nbre2;
            break;
        case '-':
            resultat = nbre1 - nbre2;
            break;
        case '*':
            resultat = nbre1 * nbre2;
            break;
        case '/':
            resultat = nbre1 / nbre2;
            break;
        default:
            resultat = null;
            break;
    }

    if(resultat) {
        alert(resultat);
    } else {
        alert('Type d\'opération inconnu');
    }
}

calculatrice();