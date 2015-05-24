app.controller('MainCtrl', function(messageFactory, $location) {
	var vm = this;
	vm.setActive = isActive;
	vm.firstName;
	vm.lastName;
	vm.date;
	vm.content;
	vm.sendMessage = postMessage;
	vm.deleteMessage = removeMessage;
	vm.deleteAllMessages = removeAllMessages
	vm.notification = '';

	refreshMessages();

	function refreshMessages() {
		messageFactory.getAllMessages(function(data) {
			vm.message = data;
			vm.message.reverse();
		});		
	}
	function postMessage() {
		var message = {
			name: {
				first: vm.firstName,
				last: vm.lastName
			},
			content: vm.content,
			date: vm.date
		}
		messageFactory.postMessage(message, function(res) {
			console.log(res);
		});
	}
	function removeMessage(id) {
		messageFactory.removeMessage(id, function(res) {
			console.log(res);
		});
	}
	function removeAllMessages() {
		messageFactory.removeAllMessages(function(res) {
			console.log(res);
		});
	}
	function notify(message) {
		vm.notification = message;
		vm.doNotify = false;
	}
	function isActive(route) {
		return ($location.path() === route);
	}

	var socketPort = 9001;
	var socket = io.connect('http://localhost:' + socketPort);

	socket.on('message:save', function (doc) {
	  console.log('Some message was saved.', doc);
	  refreshMessages();
	});
	socket.on('message:remove', function (doc) {
	  console.log('Some message was removed.', doc);
	  refreshMessages();
	});
});