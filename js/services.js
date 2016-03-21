'use strict';

var services = angular.module('dabbble.services', []);

services.factory('dribbble', function($http){
	var token = '0223c6e856a668d6c35337404192ab63dedfbff08f2707bf75bdf83484e6e03f';

	function load(path, params) {
		params = params || {};
		params.callback = 'JSON_CALLBACK';
		return $http.jsonp('https://api.dribbble.com/v1' + path + '&access_token=' + token, {params: params});
		console.log(params);
	}

	return {
		list: function(type, params) {
			return load('/shots?sort=' + type, params);
		},
		shot: function(id) {
			return load('/shots/' + id + '?');	
		}
	}

});