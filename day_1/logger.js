var url = 'http://mylogger.io/log'; //dummy URL

function DisplayLog(log_message){
	console.log('Log message: ' + log_message);
}

function DisplayURL(){
	console.log('URL message: ' + url);
}

//DisplayLog('Test node app');

module.exports.TampilkanLog = DisplayLog;
module.exports.TampilkanURL = DisplayURL;