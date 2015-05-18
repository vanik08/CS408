var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	user: {
		firstName: String,
		lastName: String
	},
	date: Date,
	content: String
})

module.exports = mongoose.model('Message', MessageSchema);