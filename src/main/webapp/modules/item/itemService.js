function itemService($log, $q, $http, bootstrapNotifyService) {

	var wydNotifyService = bootstrapNotifyService;

	var service = {
		items : [],
		itemsMap : {}
	};

	function init() {
		if (service.items.length == 0) {
			reload();
		}
	}
	service.init = init;

	function reload() {
		service.items.length = 0;
		service.itemsMap = {};
		$http.get('/items').success(function(itemsRes) {
			for (var i = 0; i < itemsRes.length; i++) {
				var item = itemsRes[i];
				service.items.push(item);
				service.itemsMap[item.id] = item;
			}
		});

	}
	service.reload = reload;

	function createOrUpdateItem(item) {
		var itemReq = {
			name : item.name,
			videoId : item.videoId,
		};
		if (item.id === 0) {
			var path = '/items/item';
			$http.post(path, itemReq).success(function(itemRes) {
				updateCache(itemRes);
				var msg = 'Item \'' + itemRes.id + '\' saved successfully';
				wydNotifyService.addSuccess(msg);
			});
		} else {
			itemReq.id = item.id
			var path = '/items/item/' + itemReq.id;
			$http.put(path, itemReq).success(function(itemRes) {
				updateCache(itemRes);
				var msg = 'Item \'' + itemRes.id + '\' saved successfully';
				wydNotifyService.addSuccess(msg);
			});
		}
	}
	service.createOrUpdateItem = createOrUpdateItem;

	function deleteItem(item) {
		var deferred = $q.defer();

		var path = '/items/item/' + item.id;
		$http['delete'](path).success(function(itemId) {
			// $log.info(itemId);
			var msg = 'Item \'' + itemId + '\' deleted successfully';
			wydNotifyService.addInfo(msg);

			delete service.itemsMap[itemId]
			var items = _.reject(service.items, function(citem) {
				return citem.id === item.id;
			});
			// $log.info(items);
			service.items.length = 0;
			_.each(items, function(citem) {
				service.items.push(citem);
			});

			deferred.resolve(itemId);
		});

		return deferred.promise;
	}
	service.deleteItem = deleteItem;

	function updateCache(itemx) {
		var item = service.itemsMap[itemx.id]
		if (item) {
			item.name = itemx.name;
			item.videoId = itemx.videoId;
		} else {
			service.items.push(itemx);
			service.itemsMap[itemx.id] = itemx;
		}
	}

	return service;
}
appServices.factory('itemService', itemService);
