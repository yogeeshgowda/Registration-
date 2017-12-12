var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "public/views/login.html",
        controller:"regCtrl"
    })
    .when("/register", {
        templateUrl : "public/views/register.html",
        controller:"signup"
    })
    .when("/target", {
        templateUrl : "public/views/target.html",
    })
});

app.controller('regCtrl', function($scope,$http,$location){

$scope.loginUser = function(){
       $http({
    method: 'GET',
    url: 'http://localhost:4000/Get'
  }).then(function successCallback(response) {
    
        console.log("Entered in successCallback ");
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.statusText);

$scope.birdsapi = response.data.data;
      for (var i=0;i<($scope.birdsapi.Data).length;i++){
      if (($scope.userName == $scope.birdsapi.Data[i].email) && ($scope.pwd == $scope.birdsapi.Data[i].pwd) ){

      $location.path("/target")
    }
        
  }
        }, function errorCallback(response) {
        console.log("Entered in errorCallback ");
        console.log(response.xhrStatus);
        console.log(response.status);
        console.log(response.statusText);
});

}
    $scope.signUp = function(){
        $location.path("/register")
    }
});

app.controller('signup', function($scope,$http,$location){
$scope.login = function(firstname,lastname,pwd,confirmpwd,email,phone)
{
   var body = {
        
            firstname: $scope.firstname,
            lastname : $scope.lastname,
            pwd : $scope.pwd,
            confirmpwd : $scope.confirmpwd,
            email:$scope.email,
            phone:$scope.phone
	};
   $http({
    method: 'POST',
    url: 'http://localhost:4000/Post',
    data:body,
    headers:{'Content-Type': 'application/json'},
  }).then(function successCallback(response) {
        console.log("Entered in successCallback ");
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.statusText);
        alert('Success');
        }, function errorCallback(response) {
        console.log("Entered in errorCallback ");
        console.log(response.xhrStatus);
        console.log(response.status);
        console.log(response.statusText);
}); 
   }

});

