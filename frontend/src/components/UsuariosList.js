import React from 'react';

export default function UsuariosList({ usuarios, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Comportamento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(user => (
              <tr key={user.id}>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.comportamento}</td>
                <td>
                  <button onClick={() => onEdit(user)}>Editar</button>{' '}
                  <button onClick={() => onDelete(user.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
