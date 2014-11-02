function itemController($rootScope, $scope, $log, bootstrapNotifyService,
		wydFocusService, itemService, youtubeEmbedUtils) {
	var wydNotifyService = bootstrapNotifyService;

	$rootScope.viewName = 'Items';

	var defaultItem = {
		id : 0,
		videoUrl : '',
		videoId : '',
		name : ''
	}, itemIndex = -1;
	$scope.item = _.assign({}, defaultItem);
	$scope.itemIndex = itemIndex

	$scope.dropdownStatus = false;

	$scope.items = itemService.items;

	$scope.refreshItems = itemService.reload;

	$scope.onItemSelect = function(index) {
		$scope.itemIndex = index;
		if (index == -1) {
			$scope.item = _.assign({}, defaultItem);
		} else {
			$scope.item = $scope.items[index];
		}
	}

	$scope.parseVideoId = function() {
		var videoId = youtubeEmbedUtils.getIdFromURL($scope.item.videoUrl);
		$scope.item.videoId = videoId;
	};

	$scope.createOrUpdateItem = function() {
		var itemId = $scope.item.id;
		itemService.createOrUpdateItem($scope.item).then(function(itemRes) {
			if (itemId === 0) {
				resetItem();
			}
		});
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

	function newItem() {
		$scope.itemIndex = -1;
		$scope.item = _.assign({}, defaultItem);
		wydFocusService('itemNameFocus');
	}
	$scope.newItem = newItem;

	function resetItem() {
		wydNotifyService.addInfo('Not yet implemented...');
	}
	$scope.resetItem = resetItem;

	itemService.init();

	$log.debug('itemController...');
}
appControllers.controller('itemController', itemController);
