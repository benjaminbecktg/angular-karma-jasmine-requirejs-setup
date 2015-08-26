
define(['angular'], function (angular) {
	'use strict';

	var myApp = angular.module('myApp', []);

	myApp.controller('sampleController', ['$scope', function ($scope) {
		$scope.greetKarma = 'Hello Karma!';
	}]);

});