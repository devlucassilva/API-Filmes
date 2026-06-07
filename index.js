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
        genero: "Romance",
        ano: 1899
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ficção",
        ano: 1949
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

// POST
app.post('/api/livro', (req, res) => {

    const novoLivro = req.body;

    livros.push(novoLivro);

    res.status(201).json(novoLivro);

});

// PUT
app.put('/api/livro/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        });
    }

    livro.titulo = req.body.titulo;
    livro.autor = req.body.autor;
    livro.genero = req.body.genero;
    livro.ano = req.body.ano;

    res.json(livro);

});

// DELETE
app.delete('/api/livro/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const indice = livros.findIndex(l => l.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        });
    }

    livros.splice(indice, 1);

    res.json({
        mensagem: "Livro removido com sucesso"
    });

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});