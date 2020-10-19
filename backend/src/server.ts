import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();


app.use(express.json());
app.use(routes);


app.listen(3333);

// Migrations no banco de dados

// Banco de dados backend 
// Driver nativo -> consulta padrão.
// Query Builder -> consultas no banco usando JS
// ORM => uma classe em js que simboliza uma tabela do banco de dados.

// Rota = conjunto
// Recurso = usuário

// Métodos = HTTP = GET, POST, PUT, DELETE
// Parâmetros = 

// GET = Buscando uma informação (Lista, item).
// POST = Criando uma informação.
// PUT = Editando uma informação.
// DELETE = Deletar uma informação.

// Quert Params
// Query Params: http://localhost:3333/users?search=lucas
// Route Params: http://localhost:3333/1 (Identificar um recusro)
// Body: Enviar dados geralmente vindo de formulários