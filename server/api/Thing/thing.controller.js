var Thing = require('./thing.schema');

exports.getAll = function(req, res) {
    Thing.find(function(err, data) {	//Select from database
    	console.log("GET Request to URL: /api/Thing/things");
        res.json(data);
    });
}
exports.add = function(req, res) {
	var thing = new Thing();
	thing.name = req.body.name;
	thing.save(function(err) {	//Save to database

	if(err) res.send(err);
	    console.log("POST Request to URL: /api/Thing/things");
		res.json({message: 'Some Thing has been created'});
	})
}