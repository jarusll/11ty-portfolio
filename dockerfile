FROM node

MAINTAINER Suraj Yadav <ysuraj877@gmail.com>

COPY . .

WORKDIR .

RUN yarn install

EXPOSE 8080

ENTRYPOINT yarn serve
