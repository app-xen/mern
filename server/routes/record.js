const express = require("express");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
// This will help us connect to the database
const dbo = require("../db");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

recordRoutes.get('/record', async (req,res) => {
 let db_connect = dbo.getDb("data");
 let records = await db_connect.collection("records").find({}).toArray();
 return res.status(200).json(records);
});
 
// This section will help you get a single record by id
recordRoutes.get('/record/:id', async (req, res) => {
 let db_connect = dbo.getDb("data");
 let myquery = { _id: new ObjectId(req.params.id) };
 let result = await db_connect.collection("records").findOne(myquery);
 return res.status(200).json(result);
});
 
// This section will help you create a new record.
recordRoutes.post('/record/add', async (req, res) => {
  let db_connect = dbo.getDb("data");
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 let result = await db_connect.collection("records").insertOne(myobj);
 return res.status(200).json(result);
});
 
// This section will help you update a record by id.
recordRoutes.post('/update/:id', async (req, res) => {
 let db_connect = dbo.getDb("data");
 let myquery = { _id: new ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 let result = await db_connect.collection("records").updateOne(myquery, newvalues);
 return res.status(200).json(result);
});
 
// This section will help you delete a record
recordRoutes.delete("/:id", async (req, res) => {
  let db_connect = dbo.getDb("data");
 let myquery = { _id: new ObjectId(req.params.id) };
 let result = await db_connect.collection("records").deleteOne(myquery);
 return res.status(200).json(result);
});
 
module.exports = recordRoutes;