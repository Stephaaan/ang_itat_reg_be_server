const Mongo = require('./mongo');
const config = require('./config.data');
const register = data => new Promise((resolve, reject) => {
    const actualYear = config.getConfig().year
    Mongo()
        .then(db => {
            db
                .db(process.env.DB_DATABASE)
                .collection(process.env.DB_REGISTRATION_COLLECTION)
                .insertOne({...data, year:actualYear}, (err) => {
                    if(err){
                        reject(err)
                    }
                    db.close()
                    resolve();
            })
        })
        .catch(err => console.log(err))
})
module.exports = {
    register
}