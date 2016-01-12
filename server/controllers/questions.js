var mongoose = require('mongoose');
var Question = mongoose.model("Question");

module.exports = (function(){
	return {
		show: function(req, res){
			Question.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		add: function(req, res){
			console.log('S | CTRL | Add Question' , req.body);
			var question = new Question({
				description: req.body.description,
				correct_answer: req.body.correct_answer,
				fake_answer_1: req.body.fake_answer_1,
				fake_answer_2: req.body.fake_answer_2,
				created_at: new Date()
			})
			question.save(function (err) {
				if(err){
					console.log(err);
					res.json({});
				}
				res.json({});
			})
		}
	}
})()