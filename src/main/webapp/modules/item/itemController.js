function itemController($rootScope, $scope, $log, itemService) {
	$rootScope.viewName = 'Items';

	var item = {
		id : 0,
		videoUrl : '',
		videoId : '',
		name : ''
	}, itemIndex = -1, query = '';
	$scope.item = item;
	$scope.itemIndex = itemIndex

	// item = {
	// id : 0,
	// videoUrl : 'http://www.youtube.com/v/bBV9mzPSreU',
	// videoId : 'bBV9mzPSreU',
	// name : 'Introduction of Anatomic Therapy'
	// };
	// $scope.item = item;

	$scope.items = itemService.items;

	$scope.refreshItems = itemService.reload;

	$scope.editItem = function(item) {
		$scope.item = item;
	};

	$scope.onItemSelect = function(index) {
		$scope.itemIndex = index;
		$scope.item = $scope.items[index];
	}

	$scope.createOrUpdateItem = function() {
		itemService.createOrUpdateItem($scope.item);
	};

	$scope.deleteItem = function() {
		itemService.deleteItem($scope.item);
	}

	$scope.resetItem = function() {
		$scope.item = item;
	};

	itemService.init();

	$log.debug('itemController...');
}
appControllers.controller('itemController', itemController);
