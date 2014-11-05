function testController($rootScope, $scope, $log) {
	$rootScope.viewName = 'Test';

	$scope.test = {
		content : ''
	};

	$log.debug('testController...');
}
appControllers.controller('testController', testController);
