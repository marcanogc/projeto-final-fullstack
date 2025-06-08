import React, { useState, useEffect } from 'react';

export default function UsuarioForm({ onSave, editingUser, onCancel }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comportamento, setComportamento] = useState('');

  useEffect(() => {
    if (editingUser) {
      setNome(editingUser.nome);
      setEmail(editingUser.email);
      setComportamento(editingUser.comportamento || '');
    } else {
      setNome('');
      setEmail('');
      setComportamento('');
    }
  }, [editingUser]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nome, email, comportamento });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>{editingUser ? 'Editar Usuário' : 'Criar Usuário'}</h2>
      <div>
        <label>Nome: </label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Comportamento: </label>
        <input type="text" value={comportamento} onChange={(e) => setComportamento(e.target.value)} />
      </div>
      <button type="submit">{editingUser ? 'Atualizar' : 'Salvar'}</button>{' '}
      {editingUser && <button type="button" onClick={onCancel}>Cancelar</button>}
    </form>
  );
}
