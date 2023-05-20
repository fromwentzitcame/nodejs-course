const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('first middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('second middleware');
//     res.send('<h1>part b of assignment finished</h1>');
// });

app.use('/users', (req, res, next) => {
  console.log('second middleware');
  res.send('<h1>List of Users</h1>');
});

app.use('/', (req, res, next) => {
  console.log('third middleware');
  res.send('<h1>part c of assignment finished</h1>');
});

app.listen(3000);
