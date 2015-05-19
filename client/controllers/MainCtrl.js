app.controller('MainCtrl', function(messageFactory) {
	var vm = this;
	vm.firstName;
	vm.lastName;
	vm.date;
	vm.content;
	refreshMessages();
	vm.sendMessage = postMessage;
	vm.deleteMessage = removeMessage;
	vm.deleteAllMessages = removeAllMessages;
	vm.doNotify = true;
	vm.notification = '';

	function refreshMessages() {
		messageFactory.getAllMessages(function(data) {
			vm.message = data;
			vm.doNotify = true;
			notify('All messages retreived.');
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
		refreshMessages();
		vm.doNotify = true;
		notify('Posted new message');	
	}
	function removeMessage(id) {
		messageFactory.removeMessage(id, function(res) {
			console.log(res);
		});
		refreshMessages();
		vm.doNotify = true;
		notify('Removed a message');
	}
	function removeAllMessages() {
		messageFactory.removeAllMessages(function(res) {
			console.log(res);
		});
		refreshMessages();
		vm.doNotify = true;
		notify('Removed all messages');
	}
	function notify(message) {
		vm.notification = message;
		vm.doNotify = false;
	}
});