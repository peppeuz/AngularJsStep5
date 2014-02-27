'use strict';

/* Controllers */
var mediaAppControllers = angular.module('homeControllers', []);

mediaAppControllers.controller('homeControllers', ['$scope', '$http',
	function ($scope, $http){
	$http.get('res/json/elenco.json').success(function(data){
		$scope.variabile="Linguaggi e tecnologie multimediali 9";
		$scope.students = data;
	});
		$scope.orderLTM = 'cognome'; 
}]);

mediaAppControllers.controller('detailControllers', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.get('res/json/' + $routeParams.studId + '.json').success(function(data){
		$scope.students = data;
	});
}]);
