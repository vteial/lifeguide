appServices.factory('itemService', function($log, $rootScope, $http) {

	var service = {
		item : {},
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
		$http.get('/items').success(function(itemsRes) {
			for (var i = 0; i < itemsRes.length; i++) {
				var item = itemsRes[i];
				service.items.push(item);
				service.itemsMap[item.id] = item;
			}
		});

	}
	service.reload = reload;

	function addOrEditItem() {
		var itemReq = {
			name : service.item.name,
			videoId : service.item.videoId,
			videoUrl : service.item.videoUrl,
		};
		$http.post('/items/item', itemReq).success(function(itemRes) {
			var item = service.itemsMap[itemRes.id]
			if (item) {
				item.name = itemRes.name;
				item.videoId = itemRes.videoId;
				item.videoUrl = itemRes.videoUrl;
			} else {
				service.items.push(itemRes);
				service.itemsMap[itemRes.id] = itemRes;
			}
		});
	}
	service.addOrEditItem = addOrEditItem;

	return service;
});