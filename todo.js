
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    var todos = [];
    $scope.todos = todos;
    $scope.addTodo = function(){
        $scope.todos.push({
            name: $scope.name,
            isComplate: true
        });
    }
    $scope.test = function(){
        var count=0;
        for(var i=0;i<$scope.todos.length;i++){
            if($scope.todos[i].isComplate==true){
                count++;
            }
        }
         return count;
    }
});