appFilters.filter('capitalizeFilter', function() {
	return function(input) {
		input = _.capitalize(input);
		return input;
	};
});

appDirectives.directive('wydHolder', function() {
	return {
		link : function(scope, element, attrs) {
			attrs.$set('data-src', attrs.wydHolder);
			Holder.run({
				images : element[0]
			});
			// Holder.run({
			// images : element.get(0),
			// nocss : true
			// });
		}
	};
});

appDirectives.directive('wydFocusOn', function() {
	return function(scope, elem, attr) {
		return scope.$on('wydFocusOn', function(e, name) {
			if (name === attr.wydFocusOn) {
				return elem[0].focus();
			}
		});
	};
});

appServices.factory('wydFocusService', [ '$rootScope', '$timeout',
		(function($rootScope, $timeout) {
			return function(name) {
				return $timeout(function() {
					return $rootScope.$broadcast('wydFocusOn', name);
				});
			};
		}) ]);
