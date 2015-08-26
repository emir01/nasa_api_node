(function(){
	"use strict";
	
	angular
		.module("ngcWidgetServices")
		.factory("rangeSliderWidgetService", rangeSliderWidgetService);
		
		function rangeSliderWidgetService(){
			
			var factory = {
				getRangeSliderOptions:getRangeSliderOptions
			};
			
			return factory;
			
			function getRangeSliderOptions(dimension){
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
			}
		}
})();