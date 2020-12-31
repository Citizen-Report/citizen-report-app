const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const reportsRouter = require('./routes/reportsRouter');
const authRouter = require('./routes/authRouter');

// Parse the request body
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// handle the request to localhost:3000
app.use('/bundle.js', express.static(path.join(__dirname, '../client/dist/bundle.js')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// router for complaints
app.use('/api', reportsRouter);

// router for auth
app.use('/auth', authRouter);

// catch all the route handler for any requests to unknown route
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => { console.log('Server is listening on port ', PORT); });
