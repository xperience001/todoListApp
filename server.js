const express = require('express'),
  app = express(),
  port = process.env.PORT || 3500,
  mongoose = require('mongoose'),
  abass = require('./Abass');
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb', { useNewUrlParser: true })
.then( (db)=>{
  console.log('db connected');
}).catch( (error)=>{
  console.log('db error occured', error);
}); 

abass.checkName('Makinde').then( (response)=>{
  console.log(response);
}).catch( (error)=>{
  console.log(error);
});

const isAgeValid = abass.checkAge(1);
if(isAgeValid){
  console.log('yeah it is valid');
}
else{
  console.log('nay! it is not valid');

}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, ()=>{
  console.log('todo list RESTful API server started on: ' + port);
});
