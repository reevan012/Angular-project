var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    $scope.test='tesssss'; 
    $scope.products = [];
    
     
    $scope.add = function(){
        $scope.products.push({
            name: $scope.name,
            price: $scope.price
        })
    }
    $scope.update = function(){
        $scope.products[$scope.updateIndex] = {
            name: $scope.name,
            price: $scope.price

        }
    }
    $scope.edit = function(index){
        $scope.name = $scope.products[index].name;
        $scope.price = $scope.products[index].price;
        $scope.updateIndex = index;

    }
    $scope.delete = function(index){
        $scope.products.splice(index,1);
    }
});