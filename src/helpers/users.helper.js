const crypto = require("crypto");
const state = require("../state/state")

const generateToken = () => crypto.randomBytes(20).toString('hex');
//token info = user_id, token, validUntil
const saveToken = (tokenInfo) => {
    const tokens = state("tokens")
    if(tokens === null || tokens === undefined){
        tokens = []
    }
    state("tokens", [...tokens, tokenInfo])
}
const checkToken = (id, token) => 
    state("tokens")
        .find(tokenObj => tokenObj.id === id && tokenObj.token === token && tokenObj.token === token)

module.exports = {
    generateToken,
    saveToken, 
    checkToken
}