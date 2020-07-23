FROM node:12-alpine3.11
RUN mkdir -p /svr/app/server-login
WORKDIR /svr/app/server-login
COPY package.json /svr/app/server-login
RUN npm install
COPY . /svr/app/server-login

CMD ["npm", "start"]