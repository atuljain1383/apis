FROM node:latest
RUN mkdir -p /myapp
WORKDIR /myapp
RUN cd /myapp
LABEL DEVELOPER="ATUL"
COPY package.json /myapp
RUN npm install
COPY ./ /myapp
EXPOSE 3000
CMD [ "npm", "start" ]


# Docker file in compose
# FROM node:latest
# RUN mkdir -p /myapp
# WORKDIR /myapp
# RUN cd /myapp
# LABEL DEVELOPER="ATUL"
# COPY usermanagement/package.json /myapp
# RUN npm install
# COPY ./usermanagement/ /myapp
# EXPOSE 3000
# CMD [ "npm", "start" ]