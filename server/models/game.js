var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new mongoose.Schema({
	id: {},
	name: { type: String, required: true },
	score: { type: Number, min: 0, max: 3 },
	percentage: { type: Number, min: 0, max: 100 },
	created_at: { type: Date, default: Date.now }
})
var Game = mongoose.model('Game', GameSchema);