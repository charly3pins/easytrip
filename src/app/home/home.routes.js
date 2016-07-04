angular
.module('easytrip')
.config(
	function ($routeProvider) {
    	$routeProvider
    		.when('/', {
        		templateUrl: 'app/home/views/home.html',
        		controller: 'HomeController',
        		controllerAs: 'home'
    		})
			
			.otherwise({redirectTo: '/'});
	}
);