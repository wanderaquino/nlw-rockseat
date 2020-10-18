//Nesse arquivo terá as funções das rotas para as páginas.
const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index: (request, response) => {

        return response.render('index');
    },
    orphanage: async (request,response) =>{

        const id = request.query.id;
        console.log(id);

        try {
            const db = await Database;
            const result = await db.all(`select * from orphanages where id = ${id}`); 
            const orphanage = result[0]; 
            orphanage.images = orphanage.images.split(",");
                
                if(orphanage.opening_on_weekends == 0){
                    orphanage.opening_on_weekends = false
                }else {orphanage.opening_on_weekends = true}

            console.log(result[0]);
            
            return response.render('orphanage', {orphanage});
        } catch (error) {
            console.log(error);
            return response.send("Erro de Banco de Dados");
        }
    },

    orphanages: async (request, response) => {

        try {
            const db = await Database;
            const orphanages = await db.all(`select * from orphanages`);
            console.log(orphanages);
            return response.render('orphanages', { orphanages: orphanages});
        } catch (error) {
            console.log(error);
            return response.send("Erro de Banco de Dados");
        }
    },

    createOrphanage: (request,response) =>{
        return response.render('create-orphanage');
    },

    saveOrphanage: async (request, response) => {
        const fields = request.body;
        console.log(fields);
            if(Object.values(fields).includes('')){
                return response.send('Todos os campos precisam ser prenchidos.');
            } else{
                try{
                    const db = await Database;
                    await saveOrphanage(db, {
                        name: fields.name,
                        latitude:  fields.lat,
                        longitude: fields.long,
                        about: fields.about,
                        whatsapp: fields.whatsapp,
                        images: fields.images.toString(),
                        instructions: fields.instructions,
                        opening_hours: fields.opening_hours,
                        opening_on_weekends: fields.open_on_weekends
                    });
                    return response.redirect('/orphanages');
                } catch(error){
                    console.log(error);
                    return response.send('Erro ao enviar o orfanato.');
                }

            
            }
        

    }

};