FROM node

MAINTAINER Suraj Yadav <ysuraj877@gmail.com>

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install


