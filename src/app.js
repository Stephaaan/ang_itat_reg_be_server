const express = require("express");
const dotenv = require('dotenv');
const router = require("./Router");
const bodyParser = require('body-parser');
const schedule = require('node-schedule')
const tokenRemoverRunner = require("./runners/tokenRemover.runner")
var cors = require('cors')

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors())
app.use("/", router);


app.listen(process.env.PORT, () => console.log("Listening on " + process.env.PORT));

const tokenCheckSchedule = schedule.scheduleJob("*/1 * * * *", function(){
    console.log('Token check running');
    tokenRemoverRunner();
  });