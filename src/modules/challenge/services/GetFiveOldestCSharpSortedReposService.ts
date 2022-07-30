import { injectable, inject } from 'tsyringe';
import IChallengeRepository from '@modules/challenge/repositories/IChallengeRepository';
import IChallenge from '../dtos/IChallenge'

@injectable()
class GetFiveOldestCSharpSortedReposService {
  constructor(

    @inject('ChallengeRepository')
    private challengeRepository: IChallengeRepository,

  ) {}

  async execute(): Promise<IChallenge[] | undefined> {

    const repositories = await this.challengeRepository.getAllRepos()

    return repositories
  }
}

export default GetFiveOldestCSharpSortedReposService;
