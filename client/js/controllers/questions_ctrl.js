app.controller('QuestionsController', function(QuestionFactory, $scope){
	console.log("QuestionsController Loaded");

	QuestionFactory.getQuestions(function(data) {
		$scope.questions = data;
	});
	$scope.addQuestion = function() {
		console.log("C | CTRL | addQuestion", $scope.new_question);
		QuestionFactory.addQuestion($scope.new_question, function() {
			$scope.questions = QuestionFactory.getQuestions(function(data) {
				$scope.questions = data;
			});
		});
	}
});