const state = require("../state/state")
const Helpers = require("../helpers/users.helper");
const StatusCodes = require("../enums/statuscodes.enum")
module.exports = (req, res, next) => {
    const userid = req.body.id
    const token = req.body.token
    const isTokenValid = Helpers.checkToken(userid, token);
    
    if(isTokenValid){
        next();
        return;
    }
    res.status(StatusCodes.UNAUTHORIZED).json({message:"UNAUTHORIZED"})
}