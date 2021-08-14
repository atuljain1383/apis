FROM node:latest
WORKDIR /usr/src/app
LABEL DEVELOPER="ATUL"
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]