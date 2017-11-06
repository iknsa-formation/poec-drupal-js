var app = angular.module('appPoec', []);

app.controller('poecCtrl', function ($scope, $http) {
    $scope.todoList = [];

    $scope.add = function () {
        var newElement = {
            name: $scope.newTodo,
            done: false
        };
        $scope.todoList.push(newElement);
        $scope.newTodo = '';
    };

    $scope.archiver = function () {
        var tmp = [];
        angular.forEach($scope.todoList, function (todo) {
            if (!todo.done) {
                tmp.push(todo);
            }
        });
        $scope.todoList = tmp;
    };
});

app.controller('autreCtrl', function () {

});
