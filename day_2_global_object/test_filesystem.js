const fs = require('fs');

//var files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function(err, files){
	if( err ){
		// Kalau error, jalankan ini
		console.log("Error occurred. Error mesage: " + error);
	} else {
		// Kalau sukses, jalankan inip
		console.log('Files in ths directory are: ' + files); 
	}
})