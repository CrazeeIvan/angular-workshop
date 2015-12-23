angular.module('myApp', ['ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wines', {templateUrl: 'templates/winesView.html', controller: 'winesCtrl'});
        $routeProvider.when('/wine:id', {templateUrl: 'templates/wineView', controller: 'wineCtrl'});
    }]);
