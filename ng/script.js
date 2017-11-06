var app = angular.module('appPoec', []);

app.controller('poecCtrl', function ($scope) {
    $scope.user = {
        name: 'Sebastien',
        lastname: 'Oliver'
    };

    $scope.addition = function () {
        alert('addition');
        $scope.res = parseInt($scope.a) + parseInt($scope.b);
    };
});

app.controller('autreCtrl', function () {

});
