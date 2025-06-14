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

// Serve arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Rota para servir SPA React, ignorando rotas que começam com /api
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

// Sincroniza banco de dados e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
