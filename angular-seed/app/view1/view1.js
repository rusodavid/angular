'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as vm'
  });
}])


.controller('View1Ctrl', ['sharedService', function(sharedService) {
	
	this.sharedValueOnController = sharedService.getSharedValue();
	this.defaultValue = "This is a default value";
	this.changeSharedValue = changeSharedValue;

	function changeSharedValue(newValue) {
		sharedService.setSharedValue(newValue);
	}
}]);