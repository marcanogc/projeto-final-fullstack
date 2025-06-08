# Projeto Fullstack: Gestão de Usuários com Análise de Comportamento

Este projeto é um sistema fullstack que permite cadastrar, listar, editar, excluir e analisar usuários com base no seu **comportamento**. Ele foi desenvolvido com:

- **Backend:** Node.js, Express, Sequelize e SQLite
- **Frontend:** React, Axios e Chart.js

---

## 🧱 Estrutura do Projeto
````
/backend
├── models/
│   ├── index.js
│   └── Usuario.js
├── routes/
│   └── api/
│       └── usuarios.js
├── servidor.js
└── database.sqlite (criado automaticamente)
/frontend
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
└── package.json
````

## 🚀 Como Rodar o Projeto
### 1. Clone o repositório
````
git clone https://github.com/marcanogc/projeto-final-fullstack.git
cd projeto-final-fullstack
````
# 🖥️ Backend (Node.js + Express + Sequelize)
## 2. Acesse a pasta backend e instale as dependências:
````
cd backend
npm install
````

Instale as dependências necessárias:
````
npm install express sequelize  sqlite3 cors
````
 #### **•	Express**: framework para criação de APIs REST 
 #### **•	Sequelize**: permite trabalhar com objetos e métodos em JavaScript em vez de escrever SQL crudo.
 #### **•	Sqlite3**: driver para manipular SQLite.
 #### **•	Cors**: para permitir solicitações do frontend do React (origem cruzada).

## 3. Estrutura dos arquivos
#### **/backend/models/index.js**: Conexão com o banco de dados SQLite usando Sequelize.
#### **/backend/models/Usuario.js**: Modelo de dados com nome, email e comportamento.
#### **/backend/routes/api/usuarios.js**: Rotas CRUD (GET, POST, PUT, PATCH, DELETE) para os usuários.
#### **/backend/servidor.js**: Arquivo principal que sobe o servidor.

## 4. Rode o servidor backend
````
node servidor.js
````
A API estará acessível em http://localhost:3001/api/usuarios

# 🌐 Frontend (React + Axios + Chart.js)
## 5. Vá para a pasta do frontend
````
cd ../frontend
npm install
````
## 6. Estrutura básica do Front
#### **/frontend/src/components/UsuarioForm.js**: Formulario para criação de usuários integração com o banco Sqlite.
#### **/frontend/src/components/UsuariosChart.js**: exibe um gráfico de barras com o número de usuários por comportamento.
#### **/frontend/src/components/UsuariosList.js**: lista os usuários, e permite integração com a API usando Axios.

## 7. Rode o frontend
````
npm start
````
A interface será aberta em http://localhost:3000

## 🔄 Funcionalidades
#### •	✅ Listar todos os usuários
#### •	✅ Cadastrar novo usuário
#### •	✅ Editar (PUT) ou atualizar parcialmente (PATCH)
#### •	✅ Excluir usuário
#### •	✅ Visualizar gráficos de comportamento com Chart.js

## 📊 Exemplo de gráfico

O gráfico exibe o número de usuários por comportamento:

![gráfico de barras com 4 usuários ativos e dois inativo](https://github.com/marcanogc/projeto-final-fullstack/blob/main/image.png)

## 💡 Tecnologias Usadas
### Backend
**•	Node.js**
**•	Express**
**•	Sequelize**
**•	SQLite**
**•	Cors**
### Frontend
**•	React**
**•	Axios**
**•	Chart.js**

## 🙌 Autor
Desenvolvido por **Gabriel Marcano**

## 📝 Licença
***Este projeto é open-source e pode ser utilizado livremente para fins educacionais.***
