$(function(){
    $('#submit').on('click', function () {
        var prenom = $('#prenom').val();
        var nom = $('#nom').val();
        $('#resultat').val(prenom + ' ' + nom);
    });
});
