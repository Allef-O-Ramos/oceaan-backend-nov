const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get("/oi", function (req, res) {
  res.send("Olá mundo");
});

const lista = ["Dipper", "Mabbel", "Stan", "Soos"];
app.get("/Gravity_Falls", function (req, res) {
  res.send(lista[1])
});

app.listen(3000);
