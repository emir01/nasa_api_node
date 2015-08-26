(function () {
	"use strict";
	
	angular
		.module("ngcFilters")
		.filter("rangeFilter", rangeFilter);

	function rangeFilter() {

		return function (items, filterValue) {
			var filtered = [];

			var min = parseInt(filterValue.start);
			var max = parseInt(filterValue.end);
			
			// If time is with the range
			angular.forEach(items, function (item) {
					if (item[filterValue.prop] >= min && item[filterValue.prop] <= max) {
							filtered.push(item);
					}
			});

			return filtered;
		};
	}
})();
