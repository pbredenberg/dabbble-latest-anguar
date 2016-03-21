'use strict';

var controllers = angular.module('dabbble.controllers', []);

controllers.controller('HeaderCtrl', function($scope) {
	$scope.name = 'World';
	 $scope.updateName = function(){
	 	$scope.name = "World from Function";
	 }
});

controllers.controller('ShotsListCtrl', function($scope, dribbble, $routeParams){
	var list = $routeParams.list;
	$scope.list = {};
	$scope.increment = function(item) {

	}

	dribbble.list(list).then(function(data){
		$scope.list = data.data;
		console.log(data);
	});

	$scope.loadNextPage = function(pageCount){
		$scope.list.page = pageCount;
		console.log($scope.list.page);
		dribbble.list(list, {page: $scope.list.page}).then(function(data){
			console.log(data);
			$scope.list = data.data;
		});
	};

});

controllers.controller('ShotsCtrl', function($scope, dribbble, $routeParams){
	console.log($routeParams);
	var id = $routeParams.id;
	
	dribbble.shot(id).then(function(data){
		$scope.shot = data.data.data;
		console.log(data.data);
	});
});