import express from 'express'
const app = express()

app.use('/', express.static(__dirname + '/build'))

app.listen(3000, () => {
  console.log('React Redux boilerplate listening on port 3000');
});
