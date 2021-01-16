import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import sessionsRouter from './sessions.routes';
import UsersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
