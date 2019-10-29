// JavaScript Document

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
		$scope.test="hellow"
		$scope.products = [];
		$scope.editField = false;
		$scope.addItem = function(){
			$scope.products.push({
								 name: $scope.inputText,
								 price: $scope.inputNumber
								 })
							
		}
		// $scope.edit = function(index) {
		// 	$scope.inputText = $scope.products[index].name;
		// 	$scope.inputNumber = $scope.products[index].price;
		// 	$scope.editField = true;
		// 	$scope.updateIndex = index;
		// }
		// $scope.updateItem = function() {
		// 	$scope.products[$scope.updateIndex ] = {
		// 	name: $scope.inputText,
		// 	price: $scope.inputNumber
		// }
		// 	$scope.editField = false;
		
		// }
        // $scope.delete = function(index) {
		// 	$scope.products.splice(index,1);
			
				
			
			
			
		// }
			
	});


