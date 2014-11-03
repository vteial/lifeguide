function initController($rootScope, $scope, $log, bootstrapNotifyService,
		$http, itemService) {
	var wydNotifyService = bootstrapNotifyService;

	$rootScope.viewName = 'Init';

	$scope.userInit = {
		content : ''
	};

	$scope.initUser = function() {
		$log.info('initUser...');
		$http.get('/init/initUser').success(function(response) {
			$scope.userInit.content = response;
		});
	};

	$scope.itemParse = {
		url : 'http://localhost:9090/temp-share/parseData.html',
		content : ''
	};

	$scope.parseItem = function() {
		$log.info('parseItem...');
		var path = '/init/parseItem?parseUrl=' + $scope.itemParse.url;
		$http.get(path).success(function(response) {
			$scope.itemParse.content = response;
		});
	};

	$scope.itemInit = {
		content : ''
	};

	$scope.initItem = function() {
		$log.info('initItem...');
		$http.get('/init/initItem').success(function(response) {
			$scope.itemInit.content = response;
		});
	};

	$log.debug('initController...');
}
appControllers.controller('initController', initController);
