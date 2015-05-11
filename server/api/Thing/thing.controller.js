var Thing = require('./thing.schema');

exports.getAll = function(req, res) {
    Thing.find(function(err, data) {
        res.json(data);
    });
}
exports.add = function(req, res) {
	var thing = new Thing();
	thing.name = req.body.name;
	thing.save(function(err) {
		
	if(err) res.send(err);
		res.json({message: 'Some Thing has been created'});
	})
}