var express = require('express');
var cors = require('cors');
var request = require('request');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
  request('http://star-api.herokuapp.com/api/v1/stars', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      // do more stuff
      res.send(info);
    }
  })
});
app.listen(3000);
console.log("The server is now running on port 3000.");