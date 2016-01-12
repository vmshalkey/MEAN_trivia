var questions = require('../controllers/questions.js');
var games = require('../controllers/games.js');

module.exports = function(app){
	app.get('/questions', function(req, res){
		questions.show(req, res);
	});
	app.post("/questions", function(req, res){
		questions.add(req, res);
	});

	app.get('/games', function(req, res){
		games.show(req, res);
	});
	app.post("/games", function(req, res){
		games.add(req, res);
	});
};