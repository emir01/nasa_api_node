(function () {
    "use strict";

    angular
        .module("nasa")
        .directive("valueSliderRange", valueSliderRange);

    function valueSliderRange() {
        var directive = {
            scope: {
                id: "@",
                opts: "=",
                min: "=",
                max: "="
            },

            link: link,
            templateUrl: "js/app/directives/slider/sliderDirective.html"
        };

        return directive;

        function link(scope, element, attrs) {
            scope.internalRangeValue = "-10;10";
                
            // setup watch events on min/max values form outside and 
            // for the internal range value and run translations
                
            scope.$watch("internalRangeValue", function (newValue, oldValue) {
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

            function buildSliderValueFromMinMax() {
                scope.internalRangeValue = scope.min + ";" + scope.max;
            }

            scope.$watch("min", function (newValue, oldValue) {
                buildSliderValueFromMinMax();
            });

            scope.$watch("max", function (newValue, oldValue) {
                buildSliderValueFromMinMax();
            });

            buildSliderValueFromMinMax();
        }
    }
})();