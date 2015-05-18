module.exports = function(app) {
    // var Message = require('./message.schema');
    var controller = require('./message.controller');

    app.get("/api/messages", controller.getAll);
    app.post("/api/messages", controller.add);
    app.delete("/api/messages", controller.delete);
    app.delete("/api/messages/:message_id", controller.deleteByID);
}
