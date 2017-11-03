$(function () {
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
            tab += '</tr></thead>';

            tab += '<tbody>';
            $.each(auteurs, function (key, val) {
                tab += '<tr>';
                tab += '<td>' + val.nom + '</td>';
                tab += '<td>' + val.prenom + '</td>';
                tab += '<td>' + val.fonction + '</td>';
                tab += '</tr>';
            });

            tab += '</tbody>';
            tab += '</table>';
            $('#liste-auteurs').append(tab);
        },
        error: function (error) {

        }
    });
});
