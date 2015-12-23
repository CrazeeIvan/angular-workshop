angular.module('myApp').
    controller('winesCtrl', ['$scope', function ($scope) {
        // ============= Local Data ============= //
        $scope.models = {
            wines: []
        };
        $scope.indicators = {
            loading: false
        };

        // ============= Initialisation ============= //
        $http.get('http://localhost:3000/wines')
    }]).
    controller('wineCtrl', ['$scope', function ($scope){

    }])
