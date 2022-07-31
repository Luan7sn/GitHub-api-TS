import { Router } from 'express';
import challengeRoutes from '@modules/challenge/infra/http/routes/challenge.routes';
//import challengeRoutes from '../../../../modules/challenge/infra/http/routes/challenge.routes'

const routes = Router();

routes.use('/v1/challenge', challengeRoutes);

export default routes;
