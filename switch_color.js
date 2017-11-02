$(function () {
    var carre_un = document.getElementById('carre-un');
    var carre_deux = document.getElementById('carre-deux');

    carre_un.addEventListener('click', function () {
        var class_tmp = carre_un.className;
        carre_un.className = carre_deux.className;
        carre_deux.className = class_tmp;
    });

    carre_deux.addEventListener('click', function () {
        var class_tmp = carre_deux.className;
        carre_deux.className = carre_un.className;
        carre_un.className = class_tmp;
    });
});
