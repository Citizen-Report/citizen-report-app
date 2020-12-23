const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const reportsRouter = require('./routes/reportsRouter')

// Parse the request body
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', reportsRouter);

// catch all the route handler for any requests to unknown route
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' }
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
  
  // Not sure about this part because we aldready sent the response above how come it will continue and execute the code below
  // err.statusCode = err.statusCode || 500;
  // err.status = err.status || 'error';

  // res.status(err.statusCode).json({
  //   status: err.status,
  //   message: err.message
  // });
});

app.listen(PORT, () => { console.log('Server is listening on port ', PORT) })



// app.get('/', (req, res) => {
//   console.log('Inside the request')
//   const text = 'SELECT * FROM reports';
//   //db.query(text, (err, res) => {
//     // if (err) {
//     //   console.log(err.stack)
//     // } else {
//     //   console.log(res.rows[0])
//     // }
//     // db.query(text)
//     //   .then(res => console.log(res.rows))
//     //   .catch(e => console.error(e.stack))

//     //})
//     // .then(data => res.status(200).send(data.rows))
//     // .catch(err => console.log('Error: ', err))
//   //})
// })