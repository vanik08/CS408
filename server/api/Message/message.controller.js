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
	console.log("DELETE Request to URL: /api/Message/messages");
	Message.remove({}, function(err) {
		if(err) console.log('error');
		res.json({message: 'All messages deleted'});
	});
}
exports.deleteByID = function(req, res) {
	console.log("DELETE Request to URL: /api/Message/messages/" + req.params.message_id);
	Message.remove({
		_id: req.params.message_id
	}, function(err, message) {
		if(err) console.log('error');
		res.json({
      message: 'Successfully deleted message with id: ' + req.params.message_id
    });
	});
}