const Register = require("../data/register.data");
const register = (data) => new Promise(
    (resolve, reject) => {
        Register.register(data)
            .then(() => resolve())
            .catch(err => reject(err))
    }
)
module.exports = {
    register
}