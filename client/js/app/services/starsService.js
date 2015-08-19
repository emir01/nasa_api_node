/*
	The service responsible for retrieving data from the 
*/
angular.module("nasa")
	.factory("starsService", function($http, $log){
	
		var getStars = function(){
			// Simple GET request example :
			return $http.get('http://star-api.herokuapp.com/api/v1/stars')
			.then(function(result){
				return result.data;
			});
		};
	
		return {
			get:getStars
		};
});