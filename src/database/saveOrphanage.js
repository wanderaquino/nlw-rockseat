module.exports = function saveOrphanage(db, orphanage){
    return db.run(`insert into orphanages (
        latitude,
        longitude,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        opening_on_weekends
    )
    values (
        "${orphanage.latitude}",
        "${orphanage.longitude}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.opening_on_weekends}") 
    `);
};