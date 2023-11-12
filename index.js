const express = require('express');
const app = express();

// Registrar um MidWare
// Indica que tds as requisições podem receber Body em JSON
// Express aplica JSON.parse para conteúdo recebido

app.use(express.json())


app.get("/", function (req, res) {
  res.send("Gravity Falls Characters");
});

const lista = ["Dipper", "Mabbel", "Stan", "Soos"];
app.get("/character", function (req, res) {
  res.send(lista)
});

//READ by ID /character
app.get("/character/:id", function (req, res) {
  const id = req.params.id - 1
  const item = lista[id]
  res.send(item)
});

// Create - [POST] /item
app.post("/character", function(req, res){
  const item = req.body.nome
  lista.push(item)
  res.send("Adicionado com sucesso")
});

// Update - [PUT] /item/id
app.put("/character/:id", function(req, res){
  const id = req.params.id - 1
  const novoItem = req.body.nome
  lista[id] = novoItem
  res.send("Item atualizado com sucesso!")
})

// Delete - [DELETE] /item/id
app.delete("/character/:id", function(req, res){
  const id = req.params.id - 1
  delete lista[id]
  res.send("Itam removido com sucesso") 
})

app.listen(3000);
