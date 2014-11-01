function testController($rootScope, $scope, $log, $http) {
	$rootScope.viewName = 'Test';

	$scope.item = {
		id : 0,
		videoUrl : 'http://www.youtube.com/v/bBV9mzPSreU',
		videoId : 'bBV9mzPSreU',
		name : 'Introduction of Anatomic Therapy'
	};

	$log.debug('testController...');
}
appControllers.controller('testController', testController);
