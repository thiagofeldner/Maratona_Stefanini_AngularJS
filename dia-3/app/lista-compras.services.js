(function () {
    "use strict";

    // MODULO
    angular.module('listaComprasApp')
        .service('ListaComprasService', listaComprasService);

    listaComprasService.$inject = ['$http', 'constantes'];

    function listaComprasService($http, constantes){
        return {
            exemplo : exemplo,
            logar: logar
        }
    
        function exemplo(){
            return $http.get('http://worldclockapi.com/api/json/est/now')
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error){
                    return error;
                });
        }

        function logar(_params){
            return $http.post(constantes.URL_BASE + '/login', _params)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error){
                    return { error: true, msg: error.data.message };
                });
        }
    }
    
})();
