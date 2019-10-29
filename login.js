var app = angular.module("myApp", []);
// app.config(function($routeProvider){
//     $routeProvider.when('/',{
//         templateUrl: 'login.html'
//     })

//     .when('/signup',{
//         templateUrl:'singup.html'
//     })
// });
app.controller ("myCtrl", function($scope, $location){
   
    $scope.login = function(){
        var name = $scope.userName;
        var password = $scope.passWord;
        if($scope.userName == "abc" && $scope.passWord == "123"){
            alert("Login Seccessful");
        }else{
           $location.path("signup.html");
        }
    }
});