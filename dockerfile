FROM node

MAINTAINER Suraj Yadav <ysuraj877@gmail.com>

WORKDIR /app

COPY . /app

RUN cd /app
RUN yarn install

EXPOSE 8080

ENTRYPOINT yarn serve
