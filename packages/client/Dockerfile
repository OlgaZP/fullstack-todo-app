FROM node:16.12.0-alpine3.13

ARG NODE_ENV="development"

RUN mkdir ./client

WORKDIR /client

COPY . .

EXPOSE 3000

RUN npm install

CMD npm start