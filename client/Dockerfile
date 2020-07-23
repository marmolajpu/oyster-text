FROM node:12-alpine3.11
RUN mkdir -p /svr/app/client-login
WORKDIR /svr/app/client-login
COPY package.json /svr/app/client-login
RUN npm install
COPY . /svr/app/client-login

CMD ["npm", "start"]