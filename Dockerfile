FROM node:16

#Create App Directory

WORKDIR /usr/src/app

#Install App Dependencies

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node" , "server.js"]