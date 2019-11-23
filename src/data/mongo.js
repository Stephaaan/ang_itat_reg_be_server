const Mongo = require('mongodb');
module.exports = () => Mongo.MongoClient.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}`)