angular.module("nasa")
	.controller("StarsController", function($scope, $log, 
		starsService, 
		ngcDataProcessingArrays,
		rangeSliderWidgetService)
	{
		
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
		
		$scope.lumSliderOptions = rangeSliderWidgetService.getRangeSliderOptions("lum");
		
		$scope.magSliderOptions = rangeSliderWidgetService.getRangeSliderOptions("appmag");
		
		/*
			Event Handlers
		*/
		
		$scope.clearSearch = function(){
			$scope.searchParams.label="";
			$scope.searchParams.id="";			
		};
		
		function setRangeFilterOptions(){
			var data = $scope.stars;
			
			var lumMinMax = ngcDataProcessingArrays.getMinMaxForProp(data, "lum");
			var appMagMinMax = ngcDataProcessingArrays.getMinMaxForProp(data, "appmag");
			
			$scope.lumSliderOptions.setMin(lumMinMax.min - 1);
			$scope.lumSliderOptions.setMax(lumMinMax.max + 1);
			
			$scope.magSliderOptions.setMin(appMagMinMax.min - 1);
			$scope.magSliderOptions.setMax(appMagMinMax.max + 1);
		};
		
		// init the stars
		starsService.get().then(function(data){
			$scope.stars = data;
			
			setRangeFilterOptions();
		});
	});