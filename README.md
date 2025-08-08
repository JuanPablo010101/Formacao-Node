# Formação em Node

Comando npm init -y

- npm init vai criar o arquivo package.json.
- -y para responder yes para todas as perguntas sem ser interativo.
- -responsavel por armazenar as dependencias do projeto.

## Rodar codigo no Node

- node src/server.js

## Padrão de importação CommonJs => require

- const http = require('http');

## Padrão usado atualmente ESModules => import/export

Colocar no package para ele consiga usar o padão Modules.

- "type": "module",
  - import http from 'node:http'; Modulo interno do Node.
  - import fastify from 'fastify' Modulo externo de terceiros.

# Instanciando o servidor

Foi instanciado o servidor utilizando a biblioteca padrão do node, no qual o servidor
escuta na porta 3333 as requisições e responde com os metodos passados na Hero function.

```js
import http from 'http';

const server = http.createServer((request, response) => {
  return response.end('Hello World');
});

server.listen(3333);
```

## Flag --watch restart o servidor

Rodar o servidor com a flag --watch para observar mudanças no código e atualizar sozinho

- node --watch src/server.js

No package podemos criar scripts para executar o comando para rodar o server

```json
 "scripts": {
    "dev": "node --watch src/server.js"
  },
```

## Executando o server com NPM

- npm run dev

# Rotas de aplicação

Rotas são meios de entrada para as funcionalidades da aplicação

# Requisição HTTP

### no terminal http POST localhost:3333/users

Uma requisição http é contém dois principais recursos,

- Metodo HTTP (GET, POST, PUT, PATCH, DELETE)
  - GET => Buscar uma informação do back-end.
  - POST => Criar uma informação no back-end.
  - PUT => Atualizar um recurso no back-end.
  - PATCH => Atualizar uma informação especifica de um recurso no back-end.
  - DELETE => Deletar um recurso do back-end.
- URL: Posso ter uma rota com metodos diferentes.
  - GET/users
  - POST/users

## STATUS CODE

Podemos utilizá-los para identificar os tipos de resposta que a nossa aplicação devolve.

- return response.writeHead(201).end(); Status de created
