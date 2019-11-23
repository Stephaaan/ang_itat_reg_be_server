const configService = require('../services/config.service')

const getConfig = (req, res) => {
    res.status(200).send(configService.getConfig());   
}
module.exports = {
    getConfig
}