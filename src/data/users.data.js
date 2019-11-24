const Mongo = require("./mongo")
const LoginState = require("../enums/loginstate.enum")
const checkUserLogin = (username, password) => new Promise((resolve, reject) => {
    Mongo()
        .then(db => {
            db
                .db(process.env.DB_DATABASE)
                .collection(process.env.DB_USERS_COLLECTION)
                .findOne({username})
                .then(user => {
                    if(user === null){
                        resolve({loginState: LoginState.USER_NOT_FOUND});
                        return;
                    }
                    if(user.password !== password){
                        resolve({loginState: LoginState.BAD_PASSWORD});
                        return;
                    }
                    const userid = user._id.toString();
                    resolve({loginState: LoginState.LOGIN_OK, id:userid})
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
    checkUserLogin
}