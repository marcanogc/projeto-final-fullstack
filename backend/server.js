// ========== CÓDIGO ORIGINAL ==========
const express = require('express');
const cors = require('cors');
const db = require('./models'); // importa a pasta models/index.js
const usuariosRoutes = require('./routes/api/usuarios'); // importa as rotas de usuários

// Inicializa o app
const app = express();
const PORT = process.env.PORT || 3001; // ⚠️ Atualizado para funcionar em Render

// Middlewares
app.use(cors()); // permite requisições do front-end (CORS)
app.use(express.json()); // permite receber JSON no body das requisições

// Rotas
app.use('/api/usuarios', usuariosRoutes); // usa as rotas de usuários com prefixo /api/usuarios

// Rota de teste (opcional, pode remover em produção)
app.get('/', (req, res) => {
  res.send('API rodando com sucesso!');
});

// ========== ADIÇÕES PARA PRODUÇÃO (SERVIR O FRONTEND REACT) ==========

const path = require('path'); // necessário para manipular caminhos de arquivos

// Serve arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Para qualquer rota não-API, envia o index.html da build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// ========== INICIAR SERVIDOR ==========
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});