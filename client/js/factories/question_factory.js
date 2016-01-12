app.factory('QuestionFactory', function($http) {
	var factory = {};

	factory.getQuestions = function(callback){
		$http.get('/questions').success(function(output){
			// console.log(output);
			questions = output;
			callback(questions);
		})
	}
	factory.addQuestion = function(info, callback){
		$http.post('/questions', info).success(function(output){
			callback();
		// console.log(output);
		})
	}

	return factory;
});