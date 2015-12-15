var app = angular.module('NavegationApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 

  .when('', { 
      templateUrl: 'views/home.html' 
    }) 
    .when('/products', { 
      templateUrl: 'views/products.html' 
    }) 
    .otherwise({ 
      templateUrl: 'views/home.html'
    }); 
});