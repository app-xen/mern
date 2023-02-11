FROM node:18-alpine as base

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules && npm install --slient

COPY . .

EXPOSE 5000
CMD ["node", "index.js"]