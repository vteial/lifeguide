function initController($rootScope, $scope, $log, bootstrapNotifyService,
		$http, itemService) {
	var wydNotifyService = bootstrapNotifyService;

	$rootScope.viewName = 'Init';

	$scope.initUser = function() {
		$log.info('initUser...');
		$http.get('/init/initUser').success(function(response) {
			$log.info(response);
			wydNotifyService.addSuccess(response);
		});
	};

	$scope.intiItem = function() {
		$log.info('initItem...');
	};

	$log.debug('initController...');
}
appControllers.controller('initController', initController);
