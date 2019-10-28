FROM node:12.10.0-alpine

WORKDIR /usr/src/app

ENV path /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

CMD ["yarn", "dev"]