var app = angular.module('testApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'login.html'
    })
    .when('/home', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.loggedIn) {
                    $location.path('/')
                }
            }
        },
        templateUrl:'home.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location){
   $scope.submit = function() {
    //   $rootScope.uname = $scope.username;
    //   $rootScope.password = $scope.password;
       
        if($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/home');
        } else {
            alert('Pogresno uneseni parametri! Pokusajte ponovo.');
       }
   };
});