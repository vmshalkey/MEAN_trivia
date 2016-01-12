var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var QuestionSchema = new mongoose.Schema({
	id: {},
	description: { type: String, required: true, minlength: 15 },
	correct_answer: { type: String, required: true },
	fake_answer_1: { type: String, required: true },
	fake_answer_2: { type: String, required: true },
	created_at: { type: Date, default: Date.now }
})
var Question = mongoose.model('Question', QuestionSchema);

QuestionSchema.plugin(uniqueValidator);