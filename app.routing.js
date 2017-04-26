vietteltvApp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "components/home/home.view.html",
		controller : "HomeController",
		controllerAs: "homeCtrl"
	}).when("/london", {
		templateUrl : "london.html"
	}).when("/paris", {
		templateUrl : "paris.html"
	}).otherwise({
		templateUrl : "404.html"
	});
});