var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	name: { 
    first: String,
    last: String
  },
	date: Date,
	content: String
})

module.exports = mongoose.model('Message', MessageSchema);