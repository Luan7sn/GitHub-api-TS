import { Router } from 'express';

import ChallengeController from '../controllers/challengeController';

const challengeRouter = Router();
const challengeController = new ChallengeController();

challengeRouter.get(
  '/getRepositories',
  challengeController.getRepositories
);

export default challengeRouter;
