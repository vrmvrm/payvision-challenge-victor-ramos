FROM node:11-alpine

WORKDIR /srv/app/backend

COPY backend .

RUN npm i
RUN npm run build

COPY backend .

CMD [ "npm", "run", "start:prod" ]
