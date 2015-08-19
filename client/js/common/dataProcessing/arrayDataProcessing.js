/*
	Contains data processing utilities for array objects which can be used in
	controllers/services to extract process array data.
	
	One of the goals of the factory is to extract out the underscore functionality used 
	to process the arrays.
*/

angular.module("ngcDataProcessing").factory("ngcDataProcessingArrays", function($log){
	var factory =  {};
	
	/*
		For a given property in the array return the min and max values.
	*/
	
	factory.getMinMaxForProp = function(array, prop){
		
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
	
	return factory;
});