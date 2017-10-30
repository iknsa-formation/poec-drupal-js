function afficheHello () {
    
    test2 = 'cc';
    var test = 'hellooooF';
}

function testVar () {
    console.log(test);
    console.log(test2);
    console.log(3%2);
}

function comparaison() {
    var ch1 = "5";
    var ch2 = 4;
    console.log(ch1 !== ch2);

    if(ch1 == 4) {
        alert('ch1 vaut 4');
    } else {
        alert('ch1 different de 4');
    }

    ch1 == 4 ? alert('ch1 vaut 4') : alert('ch1 different de 4');
}

function getService () {

    var service = prompt('Le numéro du service souhaité :');
    service = parseInt(service);

    if (service === 17) {
        alert('Vous souhaitez joindre la Police');
    } else if (service === 18) {
        alert('Vous souhautez joindre les pompiers');
    } else if (service === 0800) {
        alert('Vous souhautez joindre numéro vert');
        
    } else if (service === 06) {
        alert('Vous souhautez joindre un mobile');
        
    } else {
        alert('Je ne connais pas ce numéro');
    }

}
