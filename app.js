(function () {

    "use strict";
    
    angular
        .module('app', [])
        .controller('controlador', function($scope) {
            $scope.nome = '';
            $scope.contador = 0;
        });

})();

