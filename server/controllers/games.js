var mongoose = require('mongoose');
var Game = mongoose.model("Game");

module.exports = (function(){
	return {
		show: function(req, res){
			Game.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		add: function(req, res){
			console.log('S | CTRL | Add Game' , req.body);
			var score = req.body.question_1 + req.body.question_2 + req.body.question_3;
			var percentage = (score / 3) * 100;

			var game = new Game({
				name: req.body.name,
				score: score,
				percentage: percentage,
				created_at: new Date()
			})
			game.save(function (err) {
				if(err){
					console.log(err);
					res.json({});
				}
				res.json({});
			})
		}
	}
})()