// import express
var express = require('express');

var app = express();
// define port to start server on
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// handler for '/' path
app.get('/', function(req, res) {
  res.status(200).send('Hello World from Service A');
})

// health check at /ping
app.get('/ping', function(req, res) {
  res.status(200).send();
})

// start server at port
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

module.exports = app;
