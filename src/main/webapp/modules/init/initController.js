function initController($rootScope, $scope, $log, bootstrapNotifyService,
		$http, itemService) {
	var wydNotifyService = bootstrapNotifyService;

	$rootScope.viewName = 'Init';

	$scope.parseOutput = {
		url : 'http://localhost:9090/temp-share/parseItems.html',
		content : ''
	};

	$scope.parseItems = function() {
		$log.info('parseItems...');
		var path = '/init/parseItems?parseUrl=' + $scope.parseOutput.url;
		$http.get(path).success(function(response) {
			$scope.parseOutput.content = response;
		});
	};

	$scope.generalOutput = {
		content : ''
	};

	$scope.createUsers = function() {
		$log.info('createUsers...');
		$http.get('/init/createUsers').success(function(response) {
			$scope.generalOutput.content = response;
		});
	};

	$scope.createItems = function() {
		$log.info('createItems...');
		$http.get('/init/createItems').success(function(response) {
			$scope.generalOutput.content = response;
		});
	};

	$scope.allOutput = {
		content : ''
	};

	$scope.createAll = function() {
		$log.info('createAll...');
		$http.get('/init/createAll').success(function(response) {
			$scope.allOutput.content = response;
		});
	};

	$scope.deleteAll = function() {
		$log.info('deleteAll...');
		$http.get('/init/deleteAll').success(function(response) {
			$scope.allOutput.content = response;
		});
	};

	$log.debug('initController...');
}
appControllers.controller('initController', initController);
