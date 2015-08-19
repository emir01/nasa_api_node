// the mock service shares the same interface as the actual service	
angular.module("nasa")
	.factory("starsMockService" , function($q){
		
		function getStars(){
			return $q(function(resolve, reject){
				resolve(
					[
						{label:"test1"}, 
						{label:"test2"}
					]);
			});
		}
		
		return {
			get:getStars
		}
	});