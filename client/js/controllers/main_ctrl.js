app.controller('MainController', function(UserFactory, GameFactory, $scope){
	console.log("MainController Loaded");

	// $scope.loggedUser = false;

	// 	while($scope.loggedUser === false) {
	// 		$scope.loggedUser = prompt("What is your name?");
	// 		console.log($scope.loggedUser);
	// 	}


	// UserFactory.loginUser(function(user) {
	// 	$scope.loggedUser = user;
	// 	console.log($scope.loggedUser);
	// });

	$scope.loginUser = function() {
		UserFactory.loginUser(function(user) {
			$scope.loggedUser = user;
			console.log("C | CTRL | loginUser", $scope.loggedUser);
		});
	}

	$scope.logoutUser = function() {
		console.log("C | CTRL | logoutUser", $scope.loggedUser);
		UserFactory.logoutUser(function(user) {
			$scope.loggedUser = user;
			console.log("LoggedUser: ", $scope.loggedUser);
		});
	}

	GameFactory.getGames(function(data) {
		$scope.games = data;
	});
});