const UsersData = require("../data/users.data")
const LoginState = require("../enums/loginstate.enum")
const Helpers = require("../helpers/users.helper");
const login = (username, password) => new Promise((resolve, reject) => {
    UsersData.checkUserLogin(username, password)
        .then(({loginState, id}) => {
            if(loginState === LoginState.LOGIN_OK){
                const token = Helpers.generateToken()
                const tokenObject = {
                    id, token, validUntil: Date.now()+parseInt(process.env.TOKEN_VALIDITY_DURATION, 10)
                }
                Helpers.saveToken(tokenObject)
                resolve({loginState, token, id})    
            }
            resolve({loginState})
        })
        .catch(reject)
})
module.exports = {
    login
}