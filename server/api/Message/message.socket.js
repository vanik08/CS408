var message = require('./message.schema');

module.exports = function(socket) {
  message.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  message.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
  socket.on('message:allDeleted', function (data) {
	socket.emit('message:deleteAllMessages');
	console.log('something happend');
  });
}

function onSave(socket, doc, cb) {
  socket.emit('message:save', doc);
  console.log("Message saved");
}

function onRemove(socket, doc, cb) {
  socket.emit('message:remove', doc);
}

