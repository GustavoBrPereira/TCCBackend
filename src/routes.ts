import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import UsersController from './controllers/UsersController';
import ProjectsController from './controllers/ProjectsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/users/:id', UsersController.show);
routes.post('/users', upload.single('image'), UsersController.create);
routes.delete('/users/:id', UsersController.delete);

routes.get('/projects', ProjectsController.index);
routes.get('/projects/:id', ProjectsController.show);
routes.post('/projects', ProjectsController.create);
routes.delete('/projects/:id', ProjectsController.delete);

export default routes;