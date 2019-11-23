const state = require("../state/state");

module.exports = () => {
    const oldTokens = state("tokens");
    const newTokens = []
    oldTokens.forEach(token => {
        console.log("kukame tokeny");
        if(Date.now() < token.validUntil){
            console.log("ma to nevymazat");
            
            newTokens.push(token)
        }
    })
    state("tokens", newTokens);
}