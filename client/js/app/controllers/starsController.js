angular.module("nasa")
	.controller("StarsController", function($scope, $log, starsService, ngcDataProcessingArrays){
		/*
			Properties
		*/
		
		// main data
		$scope.stars = [];
		
		// search params
		$scope.searchParams = {
			label: "",
			id: "",
		};
		
		$scope.min = -10;
		$scope.max = 10;
		
		$scope.options = {       
		  from: -5000,
		  to: 5000,
		  step: 1,
		  dimension: " lum",
  		  limits:false
	  	};
		
		/*
			Event Handlers
		*/
		
		$scope.clearSearch = function(){
			$scope.searchParams.label="";
			$scope.searchParams.id="";			
		};
		
		function setRangeFilterOptions(){
			var data = $scope.stars;
			
			var minMax = ngcDataProcessingArrays.getMinMaxForProp(data,"lum");
			
			$scope.options.from = minMax.min - 100;
			$scope.options.to = minMax.max + 100;
			
			// set values for the new slider
			$scope.min = $scope.options.from;
			$scope.max = $scope.options.to;
		}
		
		// init the stars
		starsService.get().then(function(data){
			$scope.stars = data;
			
			setRangeFilterOptions();
		});
	});