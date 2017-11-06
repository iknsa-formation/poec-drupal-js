$(function () {
    listAuthors();
    $('#submit-add').click(function () {
        ajouter();
    });
    $('#submit-edit').click(function () {
        var id = $('#id-auteur').val();
        edit(id);
    });
});

function listAuthors() {
    $('#submit-edit').hide();
    $('#submit-add').show();
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

var voir = function (id) {
    $.ajax({
        url: 'services/api.php',
        data: {
            method: 'getAuthorById',
            id_auteur: id
        },
        dataType: 'json',
        success: function (auteur) {
            auteur = auteur[0];
            var res = '<div class="align-center">';
            res += '<span>' + auteur.nom + '</span>';
            res += '<span>' + auteur.prenom + '</span>';
            res += '<span>' + auteur.fonction + '</span>';
            res += '</div>';

            $('#detail-auteur').html(res);
        },
        error: function () {

        }
    });
};

var modifier = function (id) {
    $('#submit-edit').show();
    $('#submit-add').hide();
    $.ajax({
        url: 'services/api.php',
        data: {
            method: 'getAuthorById',
            id_auteur: id
        },
        dataType: 'json',
        success: function (auteur) {
            auteur = auteur[0];
            $('#nom').val(auteur.nom);
            $('#prenom').val(auteur.prenom);
            $('#fonction').val(auteur.fonction);
            $('#id-auteur').val(auteur.id_auteur);
        },
        error: function () {

        }
    });
};

var edit = function () {
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var fonction = $('#fonction').val();
    var id = $('#id-auteur').val();

    $.ajax({
        url: 'services/api.php',
        data: {
            method: 'editAuthor',
            id_auteur: id,
            nom: nom,
            prenom: prenom,
            fonction: fonction
        },
        dataType: 'json',
        success: function (auteur) {
            auteur = auteur[0];
            $('#nom').val('');
            $('#prenom').val('');
            $('#fonction').val('');
            listAuthors();
        },
        error: function () {

        }
    });
};

var ajouter = function () {
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var fonction = $('#fonction').val();

    $.ajax({
        url: 'services/api.php',
        data: {
            method: 'addAuthor',
            nom: nom,
            prenom: prenom,
            fonction: fonction
        },
        dataType: 'json',
        success: function () {
            $('#nom').val('');
            $('#prenom').val('');
            $('#fonction').val('');
            listAuthors();
        },
        error: function () {

        }
    });
};
