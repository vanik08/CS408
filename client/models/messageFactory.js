app.factory('messageFactory', function($http) {
     
    var factory = {}; 
 
    factory.getAllMessages = function(callback) {
    	var allMessages; 
		$http.get('/api/messages').
		  success(function(data, status, headers, config) {
		  	callback(data);
		  }).
		  error(function(data, status, headers, config) {
		  	console.log(data);
		  });
     }
 
    factory.postMessage = function(message, callback) {
		$http.post('/api/messages', message).
		  success(function(data, status, headers, config) {
		  	callback(data);
		  }).
		  error(function(data, status, headers, config) {
		  	console.log(data);
		  });
    }
    factory.removeMessage = function(id, callback) {
		$http.delete('/api/messages/' + id).
		  success(function(data, status, headers, config) {
		  	callback(data);
		  }).
		  error(function(data, status, headers, config) {
		  	console.log(data);
		  });
    }
    factory.removeAllMessages= function(callback) {
		$http.delete('/api/messages').
		  success(function(data, status, headers, config) {
		  	callback(data);
		  }).
		  error(function(data, status, headers, config) {
		  	console.log(data);
		  });
    }
    return factory;
});