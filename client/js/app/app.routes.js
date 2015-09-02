 (function(){
     "use strict";
     
     angular
        .module("nasa")   
        .config(config);
        
    config.$inject = ["$routeProvider"];
     
    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "StarsSearchController",
                controllerAs: 'vm',
                templateUrl: 'js/app/stars/starsSearch.html',
            })
            .otherwise({ redirectTo: '/' });
    }
 })();
 