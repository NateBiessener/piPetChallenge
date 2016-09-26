//bring in express
var express = require('express');
var app = express();
//bring in path
var path = require('path');
//bring in body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//bring in mongoose and connect to mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/piPets');
//bring in router
var petRouter = require('./routers/petRouter');
app.use('/pets', petRouter);

//set port and listen
app.set('port', (process.env.PORT || 3546));

app.listen(app.get('port'), () => {
  console.log('server up on:', app.get('port'));
});

app.get('/*', (req, res) => {
  console.log('request params:',req.params);
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

// app.use(express.static('public'));
