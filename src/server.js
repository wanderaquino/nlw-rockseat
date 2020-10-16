//Importando pacote para uso.
const express = require('express');
const server = express();
const path = require('path');
const pages = require('./pages.js');

//Pegando arquivos estáticos.
server.use(express.static('public'))
    //Configurar template engine.
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //Criar uma rota:
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage);

//ligar o servidor.

server.listen(5500);
