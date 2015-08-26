(function(){
	"use strict";
	
	angular
		.module("ngcDataProcessing")
		.factory("ngcDataProcessingArrays", ngcDataProcessingArrays);
		
		ngcDataProcessingArrays.$inject = ["$log", "_"];
		
		function ngcDataProcessingArrays($log, _){
			var factory = {
				getMinMaxForProp:getMinMaxForProp
			};
			
			return factory;
			
			function getMinMaxForProp(array, prop){
				var data = {
					min:null,
					max:null
				};
		
				//  the array is not an array or there are no objects in it
				if(!_.isArray(array) || array.length ==0 ){
					return data;
				}
				
				// the property is not defined on the first element of the array
				if(_.isUndefined(array[0][prop])){
					
					return data;
				}
				
				/* 
					Get the min and max values
				*/
				
				var minValue = _.min(array, function(item){
						return item[prop];
				})[prop];
				
				var maxValue = _.max(array, function(item){
						return item[prop];
				})[prop];
				
				data.min = minValue;
				data.max = maxValue;
				
				$log.debug("[ngcDataProcessingArrays][getMinMaxForProp] - Min Value: " + minValue);
				$log.debug("[ngcDataProcessingArrays][getMinMaxForProp] - Max Value: " + maxValue);
				
				return data;
			}
		}
})();