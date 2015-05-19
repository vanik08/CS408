var app = angular.module('app', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainCtrl as MainCtrl'
        })
        
        .state('admin', {
            // we'll get to this in a bit       
        });
});