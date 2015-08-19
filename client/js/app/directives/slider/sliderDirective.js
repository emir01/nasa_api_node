/*
	Define a range slider
*/

angular.module('nasa').directive(
	"valueSliderRange", 
	function () {
        return {
            
            /* 
                Define the internal scope of the slider 
            */
            scope: {
                id: "@",
                opts: "=",
                min: "=",
                max: "="
            },
            
            /*
                The value slider is defined as: $scope.lumRangeValue = "-1;1";
            */
            link: function (scope, element, attrs) {
                scope.internalRangeValue=  "-10;10";
                
                // setup watch events on min/max values form outside and 
                // for the internal range value and run translations
                
                scope.$watch("internalRangeValue", function(newValue, oldValue){
                    var split = newValue.split(";");
                    
                    var min = split[0];
                    var max = split[1];
                    
                    // update the scope min and max values
                    scope.min = parseInt(min);
                    scope.max = parseInt(max);
                });
                
                /*
                    Utility function for setting the internal range value to one based on the min max values
                */
                
                function buildSliderValueFromMinMax(){
                    scope.internalRangeValue = scope.min+";"+scope.max;
                }
                
                scope.$watch("min", function(newValue, oldValue){
                    buildSliderValueFromMinMax();
                });
                
                scope.$watch("max", function(newValue, oldValue){
                    buildSliderValueFromMinMax();
                });
                
                buildSliderValueFromMinMax();
             },
            
            templateUrl: "js/app/directives/slider/sliderDirective.html"
    };
});