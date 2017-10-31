function afficheTab () {

    for (var i=0; i < tab.length; i++) {
        alert(tab[i]);
    }

    var i=0;
    while (i<tab.length) {
        alert(tab[i]);
        i++;
    }

    do {
        
        couleur = i%2;
        if(couleur == 1) {
            fond = 'vert';
        } else {
            fond = 'rouge';
        }
        
        alert(fond);
        i++;
    } while (i<tab.length);

}

var tabOject = [
    {
        nom: 'moussa',
        prenom: 'camara',
        fonction: 'formateur'
    },
    {
        nom: 'Khalid',
        prenom: 'Sookia',
        fonction: 'Commercial'
    },
    {
        nom: 'HADHRI',
        prenom: 'Farid',
        fonction: 'Architecte'
    }
];
var afficheObjet = function () {

    var personne = {
        nom: 'Moustakime',
        prenom: 'oéoéoé',
        fonction: 'Consultant'
    };

    console.log(personne, personne.nom, personne.prenom, personne.fonction);

    for(var i in tabOject) {
        console.log(tabOject[i].nom, tabOject[i].prenom, tabOject[i].fonction);
    }

    tabOject[1].nom = 'Sookia';
    tabOject[1].prenom = 'Khalid';

    console.log(tabOject[1]);
}; 

function afficheNiemeObj(tabObj, n) {
    if(tabObj.length > n) {
        console.log(tabObj[n]);
        console.log(tabObj[n].nom, tabObj[n].prenom, tabObj[n].fonction);
    } else {
        alert('indice non trouvé');
    }
}

function objetNatifs () {
    var tab = ['khalid', 'moussa', 'moustakime', 'noemi', 'inconnu'];
    var chaine_jointure = tab.join(';');
    console.log('chaine', chaine_jointure);
    var tab2 = chaine_jointure.split(';');
    console.log('tableau', tab2);
}

function afficheDate() {

    var date = new Date();

    alert(date);
}

// afficheDate();