var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home', {
		controller: 'MainController',
		controllerAs: 'main_ctrl',
		templateUrl: '/partials/home.html'
	})
	.when('/questions', {
		controller: 'QuestionsController',
		controllerAs: 'questions_ctrl',
		templateUrl: '/partials/questions.html'
	})
	.when('/games', {
		controller: 'GamesController',
		controllerAs: 'games_ctrl',
		templateUrl: '/partials/games.html'

	})
	.otherwise('/home');
})