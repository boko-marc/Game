const express = require('express');
bodyParser = require('body-parser');
  var morgan = require('morgan')

// serveur
const app = express();
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: "game MERN API" })
})
// erreur cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// users routes
const GameRoute = require('./route/gameroute')
app.use('/game', GameRoute)
module.exports = app;