const StatusCodes = require("../enums/statuscodes.enum")
const AdministrationService = require("../services/administration.service")
const getRegistrations = (req, res) => {
    AdministrationService
        .getRegistrations()
        .then(registrations => res.status(StatusCodes.OK).json(registrations))
        .catch(err => res.status(StatusCodes.INTERNAL_ERROR).send(err))
}
const deleteRegistration = (req, res) => {
	AdministrationService.deleteRegistration(req.body.idToDel)
	.then(() => res.status(StatusCodes.OK).json({message: "OK"}))
	.catch(err => res.status(StatusCodes.INTERNAL_ERROR).send(err))
}
module.exports = {
    getRegistrations,
deleteRegistration
}
