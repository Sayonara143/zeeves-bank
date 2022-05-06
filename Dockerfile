FROM node:16

WORKDIR /back

COPY package*.json ./


RUN npm install

COPY . .

COPY ./dist ./dist

EXPOSE 8080

CMD [ "npm", "start" ]