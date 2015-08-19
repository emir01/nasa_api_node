 angular.module("nasa")
 .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "StarsController",
                templateUrl: 'js/app/views/stars.html',
            })
            .otherwise({ redirectTo: '/' });
    });