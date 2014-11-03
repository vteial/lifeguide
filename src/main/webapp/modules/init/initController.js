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
		content : ''
	};

	$scope.parseItem = function() {
		$log.info('parseItem...');
		$http.get('/init/parseItem').success(function(response) {
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
