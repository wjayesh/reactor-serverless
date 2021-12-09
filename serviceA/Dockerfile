# base image
FROM node:8.11-alpine
# change directory
WORKDIR /usr/src/app

# first install the dependencies
COPY package.json /usr/src/app/
RUN npm install

# copy all the files
COPY . /usr/src/app

# define an env var port with value 5000
ENV PORT 5000
# expose port
EXPOSE $PORT
# define command to run when container starts
CMD [ "node", "/usr/src/app/app.js" ]
