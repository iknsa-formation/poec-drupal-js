$(function () {
    $('#get-auteur').click(function () {
        $.ajax({
            url: 'auteurs.json',
            dataType: 'json',
            type: 'POST',
            success: function (auteurs) {
                console.log(auteurs);
            },
            error: function (error) {

            }
        });
    });
    var tab = '';
    tab += '<table>';
    tab += '<thead><tr>';
    tab += '<th>Nom</th>';
    tab += '<th>Prénom</th>';
    tab += '<th>Fonction</th>';
    tab += '</tr></thead>';

    tab += '<tbody>';
    // $.each(auteurs, function (key, val) {
    //     console.log(auteurs[key]);
    //     tab += '<tr>';
    //     tab += '<td>' + val.nom + '</td>';
    //     tab += '<td>' + val.prenom + '</td>';
    //     tab += '<td>' + val.fonction + '</td>';
    //     tab += '</tr>';
    // });

    tab += '</tbody>';
    tab += '</table>';
    $('#test').append(tab);
});
