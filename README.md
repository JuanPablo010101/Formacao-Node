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
