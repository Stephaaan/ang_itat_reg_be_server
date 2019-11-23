const StatusCodes = require("../enums/statuscodes.enum")
const AdministrationService = require("../services/administration.service")
const getRegistrations = (req, res) => {
    AdministrationService
        .getRegistrations()
        .then(registrations => res.status(StatusCodes.OK).json(registrations))
        .catch(err => res.status(StatusCodes.INTERNAL_ERROR).send(err))
}
module.exports = {
    getRegistrations
}