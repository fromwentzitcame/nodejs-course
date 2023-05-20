const path = require('path');

const express = require('express');

//  could use this instead, but something isn't right, returning wrong level
// const rootDir = require('../utils/path');

const router = express.Router();

// /admin/add-product => GET (when you navigate to the page)
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
});

// /admin/add-product => POST (when you submit the form on that page)
router.post('/add-product', (req, res, next) => {
  // body by default doesn't try to parse; we imported bodyParser in app.js
  console.log(req.body);
  // redirects on submit to endpoint passed in
  res.redirect('/');
});

module.exports = router;