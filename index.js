const express = require('express');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use(express.json());

app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(require('./swagger.json'))
);

let livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: 1899
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        ano: 1949
    },
    {
        id: 3,
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        ano: 1937
    }
];

// GET - Todos os livros
app.get('/api/livro', (req, res) => {

    res.json(livros);

});

// GET - Livro por ID
app.get('/api/livro/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const livro = livros.find(l => l.id === id);

    if (!livro) {

        return res.status(404).json({
            mensagem: "Livro não encontrado"
        });

    }

    res.json(livro);

});

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");

});