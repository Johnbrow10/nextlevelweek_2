import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControlers = new ClassesController();
const connectionsControler = new ConnectionsController();

routes.post('/classes', classesControlers.create);
routes.get('/classes', classesControlers.index);

routes.post('/connections', connectionsControler.create);
routes.get('/connections', connectionsControler.index);

export default routes;