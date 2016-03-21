'use strict';

var filters = angular.module('dabbble.filters', []);

filters.filter('dabbbleDate', function($filter){

	return function(value, format) {
		console.log(value);
		if (value) {
			value = Date.parse(value);
		}
		return $filter('date')(value, format);

	}

});

filters.filter('dabbbleShotPath', function($filter){

	return function(value, format) {
		console.log(value);
		if (value) {
			value = value.replace(/\s+/g, '-');
		}
		return value;

	}

});