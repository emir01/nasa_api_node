/*
 	Service for working with the slide third party script for creating and configuring sliders. 
*/
angular.module("ngcWidgetServices").factory("rangeSliderWidgetService", function(){
	var factory = {};
	
	factory.getRangeSliderOptions = function(dimension){
		var options = {       
		  from: 0,
		  min:0,
		  to:0,
		  max:0,
		  step: 1,
		  dimension: dimension,
  		  limits:false,
			
		  setMin:function(min){
			  this.min = min;
			  this.from = min;
		  },
		  
		  setMax: function(max){
			  this.max = max;
			  this.to = max;
			}
	  	};
		  
	  return options;
	};
	
	return factory;
});