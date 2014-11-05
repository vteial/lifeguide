function infoController($rootScope, $scope, $log, $http) {
	$rootScope.viewName = 'Info';

	$scope.info = {
		content : ''
	};

	function refresh() {
		$http.get('/info').success(function(response) {
			$log.info('refresh...');
			$scope.info.content = response;
		});
	}
	$scope.refresh = refresh;

	refresh();

	$log.debug('infoController...');
}
appControllers.controller('infoController', infoController);
