(function(){
	"use strict";
	
	angular
		.module("nasa")
		.factory("starsDataService", starsDataService);
		
	starsDataService.$inject = ["$http", "$log"];
	
	function starsDataService($http, $log){
		
		return{
			get:getStars
		};
		
		function getStars(){
			
			return $http.get('http://star-api.herokuapp.com/api/v1/stars')
				.then(getStarsComplete)
				.catch(getStarsFailed);
				
			function getStarsComplete(response){
				return response.data;
			}
			
			function getStarsFailed(error){
				$log.error("Get stars failed"+error.data);
			}
		}
	}
})();