function itemController($rootScope, $scope, $log, wydFocusService, itemService,
		youtubeEmbedUtils) {
	$rootScope.viewName = 'Items';

	var item = {
		id : 0,
		videoUrl : '',
		videoId : '',
		name : ''
	}, itemIndex = -1;
	$scope.item = item;
	$scope.itemIndex = itemIndex

	$scope.dropdownStatus = false;

	// item = {
	// id : 0,
	// videoUrl : 'http://www.youtube.com/v/bBV9mzPSreU',
	// videoId : 'bBV9mzPSreU',
	// name : 'Introduction of Anatomic Therapy'
	// };
	// $scope.item = item;

	$scope.items = itemService.items;

	$scope.refreshItems = itemService.reload;

	$scope.onItemSelect = function(index) {
		$scope.itemIndex = index;
		if (index == -1) {
			$scope.item = item;
		} else {
			$scope.item = $scope.items[index];
		}
	}

	$scope.parseVideoId = function() {
		$log.info('parseVideoId');
		$scope.item.videoId = youtubeEmbedUtils
				.getIdFromURL($scope.item.videoUrl);
	};

	$scope.createOrUpdateItem = function() {
		itemService.createOrUpdateItem($scope.item);
		wydFocusService('itemNameFocus');
	};

	$scope.deleteItem = function() {
		$scope.dropdownStatus = false;
		var index = $scope.itemIndex - 1;
		if (index < 0 && $scope.items.length > 1) {
			index += 1;
		}
		itemService.deleteItem($scope.item).then(function(itemId) {
			$log.info('index = ' + index);
			$scope.onItemSelect(index);
			wydFocusService('itemNameFocus');
		});
	}

	$scope.resetItem = function() {
		$scope.item = item;
	};

	itemService.init();

	$log.debug('itemController...');
}
appControllers.controller('itemController', itemController);
