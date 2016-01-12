app.factory('GameFactory', function($http, $location) {
	var factory = {};

	factory.getGames = function(callback){
		$http.get('/games').success(function(output){
			// console.log(output);
			games = output;
			callback(games);
		})
	}
	factory.addGame = function(info, callback){
		$http.post('/games', info).success(function(output){
			callback();
			$location.path('/home');
		// console.log(output);
		})
	}

	return factory;
});