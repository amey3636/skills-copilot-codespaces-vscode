// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use body parser
app.use(bodyParser.json());

// Use static files
app.use(express.static(__dirname + '/public'));

// Create array to store comments
var comments = [];

// Get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(3000);
console.log('Server is running on port 3000');