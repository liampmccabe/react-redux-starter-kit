var express = require('express')
var app = express()

app.use('/', express.static(__dirname + '/dist'))

app.listen(process.env.PORT || 3000, function() {
  console.log('React Redux boilerplate listening on port 3000');
});
