import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsuariosChart from './components/UsuariosChart';
import UsuariosList from './components/UsuariosList';
import UsuarioForm from './components/UsuarioForm';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Buscar usuarios del backend
  const fetchUsuarios = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/usuarios');
      setUsuarios(res.data);
    } catch (err) {
      console.error('Erro ao buscar usuários:', err);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Crear o actualizar usuario
  const saveUsuario = async (usuario) => {
    try {
      if (editingUser) {
        await axios.put(`http://localhost:3001/api/usuarios/${editingUser.id}`, usuario);
      } else {
        await axios.post('http://localhost:3001/api/usuarios', usuario);
      }
      setEditingUser(null);
      fetchUsuarios();
    } catch (err) {
      console.error('Erro ao salvar usuário:', err);
    }
  };

  // Eliminar usuario
  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/usuarios/${id}`);
      fetchUsuarios();
    } catch (err) {
      console.error('Erro ao deletar usuário:', err);
    }
  };

  return (
    <div className="App" style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1>Usuários</h1>
      <UsuarioForm onSave={saveUsuario} editingUser={editingUser} onCancel={() => setEditingUser(null)} />
      <UsuariosChart usuarios={usuarios} />
      <UsuariosList usuarios={usuarios} onEdit={setEditingUser} onDelete={deleteUsuario} />
    </div>
  );
}

export default App;
