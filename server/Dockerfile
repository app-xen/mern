FROM node:alpine as base

WORKDIR /server

COPY package.json package-lock.json ./

RUN rm -rf node_modules && npm install --frozen-lockfile && npm cache clean

COPY . .

CMD ["node", "./index.js"]