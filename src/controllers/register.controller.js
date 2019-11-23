const RegisterService = require("../services/register.service")
const StatusCodes = require("../enums/statuscodes.enum")
const register = (req, res) => {
    const data = req.body
    RegisterService
        .register(data)
        .then(()=>{
            res.status(StatusCodes.CREATED).json({message:"ok"})
        })
        .catch(err=>{            
            res.status(StatusCodes.INTERNAL_ERROR).send(err)
        })
}

module.exports = {
    register
}