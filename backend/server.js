// Importações
const express = require('express');
const cors = require('cors');
const db = require('./models'); // importa a pasta models/index.js
const usuariosRoutes = require('./routes/api/usuarios'); // importa as rotas de usuários
const path = require('path');
const fs = require('fs');

// Inicializa o app
const app = express();
const PORT = process.env.PORT || 3001; // porta do backend

// Middlewares
app.use(cors()); // permite requisições do front-end (CORS)
app.use(express.json()); // permite receber JSON no body das requisições

// Rotas
app.use('/api/usuarios', usuariosRoutes); // usa as rotas de usuários com prefixo /api/usuarios

// Rota de teste
app.get('/', (req, res) => {
  res.send('API rodando com sucesso!');
});

//================PARA PRODUÇÃO================
// Serve arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Serve arquivos estáticos do React (apenas se a pasta build existir)
const buildPath = path.join(__dirname, '../frontend/build');

//=====================COMENTADO PARA TESTAR EN LOCAL==============
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

// Sincroniza banco de dados e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});