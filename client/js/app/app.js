(function(){
	"use strict";
	
	angular
	.module("nasa", 
		[
			"ngRoute",
			"ngResource",
			"angularAwesomeSlider",
			
			// include common modules 
			"ngcFilters",
			"ngcDataProcessing",
			"ngcWidgetServices"
		]
	);
})();
