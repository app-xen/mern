# Portable MERN Stack

This is an application stack consisting of:

 - An Express.js Node.js server with MongoDB Client
 - A React client

 The Express server utilizes a `config.env` file to reference the MongoDB database connection. This can be a connection to MongoDB Atlas, an EC2 server running MongoDB (with Port 27017 access), or even an AWS DocumentDB. You can also utilize the AppXen mongo-express server which provides a web UI for managing your data, and gives you a fully portal MongoDB using Docker in one-click. Ensure port 27017 is available to either your own IP (for development), and/or to the EC2 instance/s that will access it (set TCP 271017 access to the security group you attach to your web server instance/s).

 You can access the mongo-express GUI via your ec2 instance host or IP address on port `8081`. From there you can create a `data` database, and within the `data` database, create a `records` collection.

 ## React Client

 The React Client utilizes a proxy for making `fetch` requests to the backend server API:
 https://create-react-app.dev/docs/proxying-api-requests-in-development/

 ## Express Server

 For the server to connect to MongoDB, you need to create a `config.env` file with the variable details as shown in `server/config.env.sample`. From there you can run:

 ```bash
 npm start
 ```

 This will concurently run the both the client, and the server locally while developing.

 ## Deployment

 Coming Soon