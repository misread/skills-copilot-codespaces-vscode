// Create web server
// Create a route to serve up a list of comments
// Create a route to serve up a single comment
// Create a route to serve up a form to create a comment
// Create a route to serve up a form to edit a comment
// Create a route to serve up a form to delete a comment

var express = require('express');
var router = express.Router();

// GET /comments
router.get('/', function(req, res) {
  res.send('GET /comments');
});

// GET /comments/new
router.get('/new', function(req, res) {
  res.send('GET /comments/new');
});

// POST /comments
router.post('/', function(req, res) {
  res.send('POST /comments');
});

// GET /comments/:id
router.get('/:id', function(req, res) {
  res.send('GET /comments/:id');
});

// GET /comments/:id/edit
router.get('/:id/edit', function(req, res) {
  res.send('GET /comments/:id/edit');
});

// PUT /comments/:id
router.put('/:id', function(req, res) {
  res.send('PUT /comments/:id');
});

// DELETE /comments/:id
router.delete('/:id', function(req, res) {
  res.send('DELETE /comments/:id');
});

module.exports = router;