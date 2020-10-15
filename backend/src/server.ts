import express from 'express';

const app = express();

app.use(express.json());

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

app.get('/users', (request, response) => {
    return response.json({message: "Hello World"});
});

app.listen(3333);




// Requisição -> Resposta
// request, response
// localhost:3333