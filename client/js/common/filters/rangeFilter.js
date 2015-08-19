/*
        Define a range filter that filters items based on a property and if that falls inside a min/max range.
*/	

angular.module("ngcFilters").filter("rangeFilter", function(){
        return function(items, filterValue){
                var filtered = [];
                
                var min = parseInt(filterValue.start);
                var max = parseInt(filterValue.end);
                
                // If time is with the range
                angular.forEach(items, function(item) {
                        if( item[filterValue.prop] >= min && item[filterValue.prop] <= max ){
                                filtered.push(item);
                        }
                });
                
                return filtered;
        };
});
	
