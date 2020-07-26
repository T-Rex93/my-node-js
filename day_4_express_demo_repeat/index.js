const express = require('express');
const app = express();

// ROUTE HANDLER
app.get('/', function(req, res){

	res.send('Hello World!');

})

app.listen(3000);

// CALLBACK FUNCTION
console.log('Listening to port 3000...');