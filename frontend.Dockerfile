FROM node:12

WORKDIR /srv/app/frontend

COPY frontend .

RUN npm i

EXPOSE 4200

CMD [ "npm", "start" ]
