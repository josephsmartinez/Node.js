// import epress
const express = require('express');

// assign express object into an app constant
const app = express();

// app.get(); app.post(); app.delete(); app.put();

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
app.get('/api/courses/:year/:month', (req, res) => {
    //res.send(req.param);
    res.send(req.query);
});

// Assinging a dynamic port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening and port ${port}...`));
