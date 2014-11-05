function testController($rootScope, $scope, $log, itemService) {
	$rootScope.viewName = 'Test';

	$scope.items = itemService.items;

	itemService.item = {
		id : 0,
		videoUrl : 'http://www.youtube.com/v/bBV9mzPSreU',
		videoId : 'bBV9mzPSreU',
		name : 'Introduction of Anatomic Therapy'
	};
	$scope.item = itemService.item;

	$scope.addItem = itemService.addOrEditItem;

	itemService.init();

	$log.debug('testController...');
}
appControllers.controller('testController', testController);
