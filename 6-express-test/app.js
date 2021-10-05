const express = require('express');
const app = express();

const users = [ { _id: "1", name: "Carlos" } ]

app.use( express.json() )

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json( users );
});

app.post('/users', (req, res, next) => {

  if(!req.body.name) {
    return next("Please give a name, or outta here!")
  }

  // create new user object
  const newUser = { ...req.body, _id: Date.now().toString() }
  users.push( newUser )

  res.json( newUser );
});

app.use((err, req, res, next) => {
  res.status(err.status || 400).send({error: err.message || err})
})


module.exports = app

//Run app, then load http://localhost:port in a browser to see the output.