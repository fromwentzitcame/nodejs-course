const express = require('express');

const router = expres.Router();

router.get('/admin/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
    );
});

// app.post() only fires for incoming POST requests instead of any kind
router.post('/admin/product', (req, res, next) => {
  // body by default doesn't try to parse, so we imported bodyParser
  console.log(req.body);
  // redirects on submit to endpoint passed in
  res.redirect('/');
});

module.exports = router;