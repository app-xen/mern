FROM node:18-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules && npm install --slient

COPY . .

EXPOSE 3000
CMD ["npm", "start"]