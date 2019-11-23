const StatusCodes = require("../enums/statuscodes.enum");
const LoginState = require("../enums/loginstate.enum");
const UsersService = require("../services/users.service")
const login = (req, res) => {
    UsersService
        .login(req.body.username, req.body.password)
        .then((response) => {
            switch(response.loginState){
                case LoginState.BAD_PASSWORD:
                    res.status(StatusCodes.UNAUTHORIZED).json({message:"BAD_PASSWORD"})
                    break;
                case LoginState.USER_NOT_FOUND:
                    res.status(StatusCodes.NOT_FOUND).json({message:"NOT_FOUND"})
                    break;
                case LoginState.LOGIN_OK:
                    res.status(StatusCodes.OK).json({token: response.token, id: response.id})
                    break;
                default:
                    res.status(StatusCodes.INTERNAL_ERROR).json({message:"INTERNAL_ERROR"})
                    break        
            }
        })
        .catch(err => {
            console.log("err", err);
            res.status(StatusCodes.INTERNAL_ERROR).send(err)
        })
}

module.exports = {
    login
}