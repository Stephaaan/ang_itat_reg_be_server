const Mongo = require('./mongo')
const getRegistrations = () => new Promise((resolve, reject) => {
    Mongo()
    .then(db => {
        db
            .db(process.env.DB_DATABASE)
            .collection(process.env.DB_REGISTRATION_COLLECTION)
            .find({})
            .toArray()
            .then(registrations => {
                resolve(registrations)
            })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
    .catch(err => {
        console.log(err);
        reject(err)
    })
})
module.exports = {
    getRegistrations
}