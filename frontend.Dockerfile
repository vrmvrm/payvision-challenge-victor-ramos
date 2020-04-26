FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY frontend .
RUN npm install
COPY frontend .
RUN npm run build
CMD [ "npm", "start" ]