const express = require('express');
const cors = require('cors');
const server = express();

const names = [
  {
    "name": "Sam"
  },
  {
    "name": "Jase"
  }
];

const favFoods = [
  {
    "food": "ramen"
  },
  {
    "age": "18"
  }
];


server.use(cors());

server.get('/getnames', function(request, respond){
  respond.send(names);
})

server.get('/getFood', function(request, respond){
  respond.send(favFoods);
})

server.listen(3000);
