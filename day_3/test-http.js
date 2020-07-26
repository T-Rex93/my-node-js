
const http = require('http');
const server = http.createServer( (req, res) => {
	if( req.url === "/" ){
		res.write('Hello World !');
		res.end();
	}

	if( req.url === '/sgu/training' ){
		res.write('ini adalah route kedua dari incoming HTTP request');
		res.end();
	}

});

/*
*
* Contoh pengunaan HTTP module, untuk incoming HTTP request
*
*/
/*
server.on('connection', (socket) => {
	// perintah yang mau dijalankan kalu ada incoming connection
	// atau ada HTTP request ke server kita
	console.log('New HTTP request, coming...');
});
*/

server.listen(3000);

console.log('listening on port 3000...');