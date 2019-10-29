var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    $scope.product = [];
    // $scope.editField = false;


    $scope.addItem = function(){
        $scope.product.push({
            name: $scope.inputText,
            price:$scope.inputNumber
        })
    }

    $scope.updateItem = function(){
        $scope.product[$scope.updateIndex] = {
            name:$scope.inputText,
            price:$scope.inputNumber

        }
        // $scope.editField = false;
    }
    $scope.editItem = function(index){
        $scope.inputText = $scope.product[index].name;
        $scope.inputNumber = $scope.product[index].price;
        // $scope.editField = true;

        $scope.updateIndex = index;
        
    }

    $scope.delete = function(index){
        $scope.product.splice(index,1);

    }
})