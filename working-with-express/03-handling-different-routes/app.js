const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

// app.use('/add-product', (req, res, next) => {
//   console.log('In another middleware!');
//   res.send('<h1>The "Add Product" Page</h1>');
// });

// app.use('/', (req, res, next) => {
//   console.log('In another middleware!');
//   res.send('<h1>Hello from Express!</h1>');
// });

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
    );
});

// app.post() only fires for incoming POST requests instead of any kind
app.post('/product', (req, res, next) => {
  // body by default doesn't try to parse, so we imported bodyParser
  console.log(req.body);
  // redirects on submit to endpoint passed in
  res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
