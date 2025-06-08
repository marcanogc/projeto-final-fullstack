const express = require('express');
const router = express.Router();
const Usuario = require('../../models/Usuario'); // importa o modelo Usuario

// GET /api/usuarios - lista todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// GET /api/usuarios/:id - busca usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

// POST /api/usuarios - cria novo usuário
router.post('/', async (req, res) => {
  try {
    const { nome, email, comportamento } = req.body;
    const novoUsuario = await Usuario.create({ nome, email, comportamento });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// PATCH /api/usuarios/:id - Atualiza parcialmente usuário pelo ID (PATCH)
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Usuario.update(req.body, { where: { id } });
    if (updated) {
      const usuarioAtualizado = await Usuario.findByPk(id);
      res.json(usuarioAtualizado);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});


// PUT /api/usuarios/:id - Atualiza completamente usuário pelo ID (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { nome, email, comportamento } = req.body;
    const usuario = await Usuario.findByPk(req.params.id);

    if (usuario) {
      await usuario.update({ nome, email, comportamento });
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// DELETE /api/usuarios/:id - deleta usuário pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.destroy();
      res.json({ message: 'Usuário deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

module.exports = router;