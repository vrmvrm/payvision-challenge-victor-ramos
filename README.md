# Payvision Challenge

Hello everyone! My name is Víctor Ramos and this is my fullstack challenge (https://github.com/payvision-development/recruitment-challenges/tree/fullstack-engineer)

## Features
- Listing transactions
- Reporting of transactions
- Detail transactions

## Technologies
### Common (backend and frontend)
- Docker
- TypeScript

### Backend
- NestJS

### Frontend
- Angular

## Architecture
I decided to use an architecture based on services, this means creating a service for each functionality.
The reason for using this architecture is because it makes the maintenance of the software much easier as well as adding more functionalities.

#### TypeScript
TypeScript is based on JavasScript but as its name indicates it has types. This makes the code more readable and avoid some errors when the application is running.

### NestJS
NestJS is a awesome framework based on typescript, which makes easier the implementation of the MVC pattern.
Also has a lot of decorators and packages to simplify the development.

### Angular
Once I have chosen NestJS for backend development, I have chosen Angular as the framework to develop the frontend.
Angular has a structure very similar to NestJS which makes development easier.

### Docker
Docker is an amazing tool for development and production environments.
It makes possible to create the necessary environment for an application to work without installing anything.

## How to run?
Due to Docker, it is very easy to run the application.
Just run the following commands:
```sh docker-compose build```
```sh docker-compose up``` 


## How to test?
### Backend
To run tests just go to backend folder and run:
```sh npm i```
```sh npm run test```
### Frontend
To run tests just go to frontend folder and run:
```sh npm i```
```sh ng test```

## API documentation
Using NestJS there is the possibility to self-generate a swagger endpoint to expose the documentation of the service.
After run docker-compose swagger endpoint is in:
- http://localhost:3000/explorer

