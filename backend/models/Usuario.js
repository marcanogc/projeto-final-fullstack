// Modelo Sequelize para a tabela 'usuarios'

const { DataTypes } = require('sequelize');
const { sequelize } = require('./index'); // importa a conexão

// Modelo Sequelize para a tabela 'usuarios'
const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  comportamento: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'usuarios'
});

module.exports = Usuario;