var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  Product = require('./api/models/productModel'), //created model loading here
  bodyParser = require('body-parser');
  
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
// var routes = require('./api/routes/t'); //importing route

routes(app); //register the route



app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
