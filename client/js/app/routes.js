 
 (function(){
     "use strict";
     
     angular
        .module("nasa")   
        .config(config);
     
    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "StarsController",
                controllerAs: 'vm',
                templateUrl: 'js/app/views/stars.html',
            })
            .otherwise({ redirectTo: '/' });
    }
 })();
 