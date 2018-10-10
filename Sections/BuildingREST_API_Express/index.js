// import epress and joi
const express = require('express');
const Joi = require('joi');

// assign express object into an app constant
const app = express();

// Express functions 
// app.get(); app.post(); app.delete(); app.put();

app.use(express.json());


const courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 1'},
    {id: 3, name: 'course 3'},
];


// Defining a routes and handlers 
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// end points that can except paramters
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.param.id);
// });

// end points that can except many paramters
app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params);
    //res.send(req.query);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) //404 
      res.status(404).send('<h1>The course with the given ID was not found. :(</h1>');
    res.send(course);
});


// Making a post method to add objects. For now there is no database
// so we will do things manually as an example

app.post('/api/courses', (req, res) => {
    
   // Use the joi object to validate the input from user
    const schema = {
      name: Joi.string().min(3).required()
    };
    
    const result = Joi.validate(req.body, schema);
    console.log(result);
  
  // Input validation
//   if (!req.body.name || req.body.name.length < 3){
//     // 400 Bad Request
//     res.status(400).send('Name is required and should be minimum 3 characters');
//     return;
//   };

    if(result.error){
       //res.status(400).send(result.error);
       res.status(400).send(result.error.details[0].message);
       return;
    }
  
    const course = {
    id: courses.length + 1, 
    name: req.body.name // We need to enable parsing of JSON objects
  };
  // Add the object in the array
  courses.push(course);
  // Print the object to the user
  res.send(course);

});

// Assinging a dynamic port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening and port ${port}...`));
