var message = require('./message.schema');

module.exports = function(socket) {
  message.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  message.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('message:save', doc);
  console.log("Message saved");
}

function onRemove(socket, doc, cb) {
  socket.emit('message:remove', doc);
  console.log("Message removed");
}