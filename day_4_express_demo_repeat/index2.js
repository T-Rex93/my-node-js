/* LOCAL VARIABLE, DATABASE COURSE
*
*/

const courses = [
	{ id: 1, name: 'Math'},
	{ id: 2, name: 'Physics'},
	{ id: 3, name: 'Chemistry'}
];

/* WEB SERVICE UNTUK RETURN ALL COURSES */

app.get("/api/courses", (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.send( courses );
});

/* WEB SERVICE UNTUK RETURN 1 OBJECT COURSE BY COURSE ID */

app.get("/api/courses/:id", (req, res) => {
	const course = courses.find( c => c.id === parseInt(req.params.id));
	if( !course ) res.status(404).send('The course with the given ID was not found. ');
	res.send(course);
});

/* WEB SERVICE UNTUK ADD 1 DATA BARU KE DALAM MASTER DATA COURSES */

app.post("/api/courses", (req, res) => {
	
	//SCHEMA UNTUK VALIDASI OBJECT YANG MASUK KE HTTP REQUEST
	const {error} = validateCourse(req.body);
	if(error){
		// 400 Bad Request
		return res.status(400).send(error.details[0].message);
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);

});

/* WEB SERVICE UNTUK UPDATE 1 COURSE BASED ON COURSE */

app.put('/api/courses/:id', (req,req) => {

	// validasi
	// kalo gak sesuai, return 400
	const {error} = validateCourse(req.body);
	if( error ){
		//400 Bad Request
		return res.status(400).send(error.details[0].message);
	}

	// cari coursenya
	// klo ga ketemu, return 404
	const course = courses.find( c => c.id === parseInt(req.params.id) );
	if( !course ) res.status(404).send('The course with the given ID was not found.');

	// kalo semuanya sudah sesuai dengan persyaratan
	// maka update course nya
	// return object course yang baru setelah di update
	course.name = req.body.name;
	res.send(course);
	
})

/* WEB SERVICE UNTUK DELETE 1 COURSE BASED ON COURSE ID */
app.delete('/api/courses/:id', (req, res) => {

	// cari course nya
	// kalo ga ketemu, return 404
	const course = courses.find( c => c.id === parseInt(req.params.id) );
	if( !course ) res.status(404).send('The course with the given ID was not found. ');
});

funtion validateCourse(course){
	const schema = Joi.object({
		name: Joi.string().min(3).required()
	});

	return schema.validate(course);
}

/* START WEB  SERVICE */

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Listening on port ${port}')
});
