# API Livros

API REST desenvolvida em Node.js utilizando Express para gerenciamento de livros (pode ser utilizada para outras obras como pinturas, mangás, músicas etc)

## Descrição

Esta API permite realizar operações de cadastro, consulta, atualização e remoção de livros utilizando os principais métodos HTTP:

- GET
- POST
- PUT
- DELETE

A documentação da API está disponível através do Swagger!

---

## Tecnologias Utilizadas

- Node.js
- Express
- Swagger

---

## Estrutura da Entidade

A entidade base principal da API é de **Livro**.

### Atributos

| Campo | Tipo | Descrição |
|---------|---------|---------|
| id | Integer | Identificador único do livro |
| titulo | String | Título do livro |
| autor | String | Autor do livro |
| ano | Integer | Ano de publicação |

Exemplo:

```json
{
    "id": 1,
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "ano": 1899
}
```

---

## Persistência dos Dados

Os dados são armazenados em memória utilizando um array JavaScript.

**Observação:** como os dados são em memória, eles são armazenados até que a aplicação seja fechada ou reiniciada.

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/devlucassilva/API-Filmes.git
```

### 2. Acessar a pasta do projeto

```bash
cd dev-fw-2
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
node index.js
```

Mensagem esperada:

```bash
Servidor rodando na porta 3000
```

---

## Documentação Swagger

Após iniciar a aplicação, acesse:

http://localhost:3000/api-docs

A interface Swagger permite:

- Visualizar endpoints
- Visualizar parâmetros
- Testar requisições
- Visualizar respostas

---

# Endpoints

## Buscar todos os livros

### Requisição

```http
GET /api/livro
```

### Exemplo de resposta

```json
[
    {
        "id": 1,
        "titulo": "Dom Casmurro",
        "autor": "Machado de Assis",
        "ano": 1899
    }
]
```

---

## Buscar livro por ID

### Requisição

```http
GET /api/livro/1
```

### Exemplo de resposta

```json
{
    "id": 1,
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "ano": 1899
}
```

---

## Cadastrar livro

### Requisição

```http
POST /api/livro
```

### Body

```json
{
    "id": 2,
    "titulo": "O Hobbit",
    "autor": "J. R. R. Tolkien",
    "ano": 1937
}
```

### Resposta

```json
{
    "id": 2,
    "titulo": "O Hobbit",
    "autor": "J. R. R. Tolkien",
    "ano": 1937
}
```

---

## Atualizar livro

### Requisição

```http
PUT /api/livro/2
```

### Body

```json
{
    "titulo": "O Hobbit - Atualizado",
    "autor": "J. R. R. Tolkien",
    "ano": 1937
}
```

### Resposta

```json
{
    "id": 2,
    "titulo": "O Hobbit - Atualizado",
    "autor": "J. R. R. Tolkien",
    "ano": 1937
}
```

---

## Excluir livro

### Requisição

```http
DELETE /api/livro/2
```

### Resposta

```json
{
    "mensagem": "Livro removido com sucesso"
}
```

---

## Autor

Projeto desenvolvido para a a matéria de Desenvolvimento Framework II.

Aluno: Lucas Silva (RA: 2102994)
Aluno: Lucas Silva