app.controller('GamesController', function(GameFactory, QuestionFactory, UserFactory, $scope){
	console.log("GamesController Loaded");


	$scope.points = {
		question_1: "Question 1 is unanswered",
		question_2: "Question 2 is unanswered",
		question_3: "Question 3 is unanswered"
	};

	UserFactory.loginUser(function(user) {
		$scope.loggedUser = user;
		console.log($scope.loggedUser);
		return $scope.loggedUser
	});


	QuestionFactory.getQuestions(function(data) {
		var shuffled = data;
		for(var i = 0; i<shuffled.length; i++) {
		var random = Math.floor(Math.random()*shuffled.length);
			var temp = shuffled[i];
			shuffled[i] = shuffled[random];
			shuffled[random] = temp;
		}
		$scope.shuffled_questions = shuffled;
		return $scope.shuffled_questions
	});



	$scope.addGame = function() {
		console.log("C | CTRL | addGame", $scope.new_game);
		$scope.new_game.name = $scope.loggedUser;
		GameFactory.addGame($scope.new_game, function() {
			$scope.games = GameFactory.getGames(function(data) {
				$scope.games = data;
			});
		});
	}
});