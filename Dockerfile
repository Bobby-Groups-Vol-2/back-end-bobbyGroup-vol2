FROM node:14.15.4 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
EXPOSE 5000
CMD [ "node", "server.js" ]
