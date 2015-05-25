var Message = require('./message.schema');

exports.getAll = function(req, res) {
	console.log("GET Request to URL: /api/Message/messages");
    Message.find(function(err, data) {	//Select from database
        res.json(data);
    });
}
exports.add = function(req, res) {
	console.log("POST Request to URL: /api/Message/messages");
	var message = new Message();
	message.content = req.body.content;
  	message.name = req.body.name;
  	message.date = req.body.date;
	message.save(function(err) {	//Save to database
		if(err) res.send(err);
			res.json({message: 'Some Message has been created'});
	})
}
exports.delete = function(req, res) {
	Message.remove({_id}, function(err, data) {
		res.json({mesage: 'All messages have been deleted'});
	});
}
exports.deleteByID = function(req, res) {
	console.log("DELETE Request to URL: /api/Message/messages/" + req.params.message_id);
	Message.findById(req.params.message_id, function(err, message) {
		message.remove();
		res.json({'Successfully deleted message with id: ' : req.params.message_id });
	});
}