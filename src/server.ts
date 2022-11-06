import 'reflect-metadata';
import express from 'express';
import { Container } from 'typedi';
import setupRoutes from './routes';
import Configuration from './configuration';

console.log('Setting up server');
const server = express();
console.log('Setting server request objects to json');
server.use(express.json());

const configuration = Container.get(Configuration);
const { port } = configuration;
console.log('Loaded Config');
console.log(configuration);

server.use('/', (req, res, next) => {
  console.log(`Processing request: ${JSON.stringify(req.path)} query: ${JSON.stringify(req.query)} body: ${JSON.stringify(req.body)}`);
  next();
});

console.log('Setting up routes');
const routes = setupRoutes(express.Router());
console.log('Adding routes to server');
server.use('/', routes);

server.listen(port, () => {
  console.log(`Sever started, listening at http://localhost:${port}`);
});
