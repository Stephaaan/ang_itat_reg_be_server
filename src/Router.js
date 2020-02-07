const router = require('express').Router();
const ConfigController = require('./controllers/config.controller');
const RegisterController = require('./controllers/register.controller')
const UsersController = require('./controllers/users.controller')
const AdministrationController = require('./controllers/administration.controller')
const isAuthenticated = require('./middleware/isAuthenticated.middleware')

router.post("/administration/isAuthenticated",isAuthenticated, (req, res) => res.status(200).json({message:"OK"})) 
router.get("/hello", (req,res) => res.send("Hello"));
router.get("/config", ConfigController.getConfig);
router.post("/register", RegisterController.register);
router.post("/administration/login", UsersController.login)
router.post("/administration/registrations", isAuthenticated, AdministrationController.getRegistrations)
router.post("/administration/delete", isAuthenticated, AdministrationController.deleteRegistration)
module.exports = router;
