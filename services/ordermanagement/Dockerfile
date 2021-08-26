FROM node:latest
RUN mkdir -p /myapp
WORKDIR /myapp
RUN cd /myapp
LABEL DEVELOPER="ATUL"
COPY package.json /myapp
RUN npm install
COPY ./ordermanagement/ /myapp
EXPOSE 3000
CMD [ "npm", "start" ]