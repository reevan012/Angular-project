// JavaScript Document


$scope.deletedata = function (name,price) {

var data ={

name: name,
price:price

};
			}
					$scope.delete = function ( index ) {
  var product_to_delete = $scope.products[index];

  API.DeletePerson({ name: product_to_delete.name & price:product_to_delete.price }, function (success) {
    $scope.products.splice(index)
  })
}