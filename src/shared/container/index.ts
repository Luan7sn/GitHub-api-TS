import { container } from 'tsyringe';

import IChallengeRepository from '@modules/challenge/repositories/IChallengeRepository';
import ChallengeRepository from '@modules/challenge/infra/repositories/IChallengeRepository'

container.registerSingleton<IChallengeRepository>(
  'ChallengeRepository',
  ChallengeRepository
);
