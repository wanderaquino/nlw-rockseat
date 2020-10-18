const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

//Alterei o function por await [Mais boas práticas]!
//Colocando o async na função, posso usar outras funções dentro com um await. De modo que, ela aguarda para seguir com a execuão.

Database.then(async (db) => {
    //Inserir dados na tabela
    // await saveOrphanage(db, {
    //     name: "Lar das Meninas",
    //     latitude: "-27.500333", 
    //     longitude: "-49.8005874",
    //     about: "Presta assistências a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "21999995099",
    //     images: ['https://images.unsplash.com/photo-1600987194458-da7a91261b84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    //             'https://images.unsplash.com/photo-1600287986960-f4901669c6e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    //     opening_hours: "Horário de visitas Das 18h até as 8h.",
    //     opening_on_weekends: "1"
    // });
    //Consultar dados na tabela
    const orphanages = await db.all('select * from orphanages;');
    console.log(orphanages);
})