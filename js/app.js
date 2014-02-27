'use strict';

/* App Module */
var mediaApp = angular.module('mediaApp', [
	'ngRoute',
	'homeControllers'
	]);

mediaApp.config(['$routeProvider',
 function($routeProvider){
 	$routeProvider.
 	when('/students', {
 		templateUrl: 'views/home.html',
 		controller: 'homeControllers'
 	}).
 	 when('/students/:studId', {
        templateUrl: 'views/detail.html',
        controller: 'detailControllers'
    }).
      otherwise({
        redirectTo: '/students'
    });
}]);
