# Portable MERN Stack

This is an application stack consisting of:

 - An Express.js Node.js server with MongoDB Client
 - A React client

 The Express server utilizes a `config.env` file to reference the MongoDB database connection. This can be a connection to MongoDB Atlas, an EC2 server running MongoDB (with Port 27017 access), or even an AWS DocumentDB. You can also utilize the AppXen mongo-express server which provides a web UI for managing your data, and gives you a fully portal MongoDB using Docker in one-click. When you launch the EC2 instance, you'll need to:

 1. Connect to the mongo-express instance via SSH and modify the `~/docker-compose.yml` file:

 ```yaml
version: '3'

services:

  mongo:
    image: mongo
    restart: always
    ports:
      - 27017:27017 # <!-- Add this to expose the mongodb port to the EC2 host
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: ********
    volumes:
     - /home/ubuntu/data:/data/db

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: ********
      ME_CONFIG_BASICAUTH_USERNAME: admin
      ME_CONFIG_BASICAUTH_PASSWORD: ********
 ```

 Then re-boot the stack:

 ```bash
 $ docker-compose down
 $ docker-compose up
 ```

 Then you'll need to ensure the Security Group allows for TCP connections on port 27017. For testing you can expose this to your own IP address, then once you launch the Express Server, you can lock down 27017 access to the Express application server, or instances security group.

 You can access the mongo-express GUI via your ec2 instance host or IP address on port `8081`. From there you can create a `data` database, and within the `data` database, create a `records` collection.

 ## React Client

 The React Client utilizes a proxy for making `fetch` requests to the backend server API:
 https://create-react-app.dev/docs/proxying-api-requests-in-development/

 ## Express Server

 For the server to connect to MongoDB, you need to create a `config.env` file with the variable details as shown in `server/config.env.sample`. From there you can run:

 ```bash
 npm start
 ```

 which will concurently run the client and server locally for development.