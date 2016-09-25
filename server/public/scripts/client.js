console.log('client script sourced');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: '/views/partials/home.html',
    controller: 'homeController'
  }).when('/view', {
    templateUrl: '/views/partials/view.html',
    controller: 'viewController'
  }).when('/add', {
    templateUrl: '/views/partials/add.html',
    controller: 'addController'
  }).otherwise({
    redirectTo: '/home'
  });
}]);
