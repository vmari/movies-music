FROM node:9.2-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
