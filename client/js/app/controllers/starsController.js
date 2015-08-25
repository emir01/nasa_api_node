(function(){
	'use strict';
	
	angular.module("nasa")
		.controller("StarsController", StarsController);
		
	StarsController.$inject = ["$log", "starsService", "ngcDataProcessingArrays", "rangeSliderWidgetService"];
	
    function StarsController($log, starsService, ngcDataProcessingArrays, rangeSliderWidgetService)
	{
		var vm = this;
		
		vm.stars = [];
		vm.searchParams = { label: "", id: ""};
		
		vm.lumSliderOptions = rangeSliderWidgetService.getRangeSliderOptions("lum");
		vm.magSliderOptions = rangeSliderWidgetService.getRangeSliderOptions("appmag");
		
		vm.clearSearch = clearSearch;
		
		activate();
		
		function clearSearch(){
			vm.searchParams.label="";
			vm.searchParams.id="";			
		}
		
		function activate(){
			starsService.get().then(function(data){
				vm.stars = data;
				setRangeFilterOptions();
			});
		}
		
		function setRangeFilterOptions(){
			var lumMinMax = ngcDataProcessingArrays.getMinMaxForProp(vm.stars, "lum");
			
			var appMagMinMax = ngcDataProcessingArrays.getMinMaxForProp(vm.stars, "appmag");
			
			// todo: possibly move to service
			vm.lumSliderOptions.setMin(lumMinMax.min - 1);
			vm.lumSliderOptions.setMax(lumMinMax.max + 1);
			
			// todo: possibly move to service
			vm.magSliderOptions.setMin(appMagMinMax.min - 1);
			vm.magSliderOptions.setMax(appMagMinMax.max + 1);
		};
		
	};
})();
