module.exports = function(app) {
    // var Thing = require('./thing.schema');
    var controller = require('./thing.controller');

    app.get("/api/things", controller.getAll);
    app.post("/api/things", controller.add);
}
