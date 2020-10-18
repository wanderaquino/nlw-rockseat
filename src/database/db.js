const Database = require('sqlite-async');

//abrir um arquivo:
//O then é para objeto premises, para sincronizar a abertura 
//do arquivo com o restante do código.

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);

function execute (db) {
    console.log('Função criação da tabela');
    return  db.exec(
        `create table if not exists orphanages (
            id integer primary key autoincrement,
            latitude text,
            longitude text,
            name text,
            about text,
            whatsapp text,
            images text,
            instructions text,
            opening_hours text,
            opening_on_weekends
        );`
    );

}