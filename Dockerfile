FROM node:18.18.0
WORKDIR /react-docker-workout-loggger
COPY public/ /react-docker-workout-loggger/public
COPY src/ /react-docker-workout-loggger/src
COPY package.json /react-docker-workout-loggger/
RUN npm install
RUN npm install --global --unsafe-perm json-server@0.17.4
RUN npx json-server db.json -m ./node_modules/json-server-auth --port 8000
CMD ["npm", "start"]