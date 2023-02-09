
const { MongoClient } = require("mongodb");
const Db = process.env.MONGODB_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connect: async function (callback) {
    console.log('connecting to mongodb...');
    _db = (await client.connect()).db("data");
    return _db;
  },
 
  getDb: function () {
    return _db;
  },
};