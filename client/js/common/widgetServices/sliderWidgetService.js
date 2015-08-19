/*
 	Service for working with the slide third party script for creating and configuring sliders. 
*/
angular.module("rangeSliderWidgetService" , function(){
	
	var getRangeSliderOptions = function(dimension, from, to){
		var options = {       
		  from: from,
		  to: to,
		  step: 1,
		  dimension: dimension,
  		  limits:false
	  	};
		  
	  return options;
	}
	
	return {
		GetRangeSliderOptions: getRangeSliderOptions
	};
})