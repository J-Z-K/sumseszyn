const express = require('express');
const bodyParser = require('body-parser');

const questionRouter = require('./routes/questions.router.js');
const { connectToDatabase } = require('./services/database.js');

const app = express();
const port = process.env.PORT || 3000;

connectToDatabase()

app.get('/_healthcheck', (_req, res) => res.status(200).send({'status': 'running'}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.use('/question', questionRouter)

app.listen(port, () => {
  console.log(`sumseszyn listening at http://localhost:${port}`)
});