FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY frontend .
RUN npm install
COPY frontend .
RUN npm run build
RUN npm install -g @angular/cli@9.1.3

EXPOSE 4200
CMD ng serve --host 0.0.0.0