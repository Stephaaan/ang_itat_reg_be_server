const Administration = require('../data/administration.data')

const getRegistrations = () => new Promise((resolve, reject) => {
    Administration
        .getRegistrations()
        .then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        });
})
const deleteRegistration = id => new Promise((resolve, reject) => {
	Administration.deleteRegistration(id)
	.then(() => resolve())
	.catch(err => reject(err))
})
module.exports = {
    getRegistrations
    deleteRegistration
}
