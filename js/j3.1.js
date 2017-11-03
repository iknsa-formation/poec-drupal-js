$(function () {
    $('#carre-un').click(function () {
        $('#carre-deux').fadeToggle(2000, function () {
            alert('hello');
        });
    });
});
