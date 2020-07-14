const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = "http://sguloggingservice.com/log";

class Logger extends EventEmitter{
	log(message){
		// Send an HTTP request
		console.log(message);

		// Raise an event
		this.emit('messageLoad', {id: 1, url : 'htttp://heberthendrik.com'} );
	}
}

module.exports= Logger;