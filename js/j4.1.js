$(function () {
    listAuthors();
});

function listAuthors() {
    $.ajax({
        url: 'services/api.php',
        dataType: 'json',
        data: {
            method: 'getAuthors'
        },
        success: function (auteurs) {
            var tab = '';
            tab += '<table>';
            tab += '<thead><tr>';
            tab += '<th>Nom</th>';
            tab += '<th>Prénom</th>';
            tab += '<th>Fonction</th>';
            tab += '<th>Supprimer</th>';
            tab += '<th>Modifier</th>';
            tab += '<th>Voir</th>';
            tab += '</tr></thead>';

            tab += '<tbody>';
            $.each(auteurs, function (key, val) {
                tab += '<tr>';
                tab += '<td>' + val.nom + '</td>';
                tab += '<td>' + val.prenom + '</td>';
                tab += '<td>' + val.fonction + '</td>';
                tab += '<td><button onclick="supprimer(' + val.id_auteur + ')" class="btn btn-danger">Supprimer</button></td>';
                tab += '<td><button onclick="modifier(' + val.id_auteur + ')" class="btn btn-warning">Modifier</button></td>';
                tab += '<td><button onclick="voir(' + val.id_auteur + ')" class="btn btn-primary">Voir</button></td>';
                tab += '</tr>';
            });

            tab += '</tbody>';
            tab += '</table>';
            $('#liste-auteurs').html(tab);
        },
        error: function (error) {

        }
    });
}
var supprimer = function (id) {
    $.ajax({
        url: 'services/api.php',
        data: {
            method: 'deleteAuthor',
            id_auteur: id
        },
        success: function () {
            listAuthors();
        },
        error: function () {

        }
    });
};
