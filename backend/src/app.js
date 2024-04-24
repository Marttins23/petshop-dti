const express = require('express');
const app = express();
const rotas = require('./routes/index.js');
const cors = require('cors');
const PORTA = 3001;

app.use(express.json());
app.use(cors());
app.use('/', rotas);

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});