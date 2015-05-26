app.controller('MainCtrl', function(messageFactory, $location) {

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
	socket.on('message:deleteAllMessages', function (data) {
		refreshMessages();
	});

	var vm = this;
	vm.setActive = isActive;
	vm.firstName;
	vm.lastName;
	vm.date;
	vm.content;
	vm.sendMessage = postMessage;
	vm.deleteMessage = removeMessage;
	vm.deleteAllMessages = removeAllMessages;
	vm.notification = '';
	vm.loggedIn = false;
	vm.signIn = signIn;
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
			vm.content = '';
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
			socket.emit('message:allDeleted', function(data) {
				console.log(data);
			});
		})
	}
	function notify(message) {
		vm.notification = message;
		vm.doNotify = false;
	}
	function signIn() {
		vm.loggedIn = true;
	}
	function isActive(route) {
		return $location.path() === route;
	}

});