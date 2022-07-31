import { injectable, inject } from 'tsyringe';
//import IChallengeRepository from '@modules/challenge/repositories/IChallengeRepository';
import IChallengeRepository from '../repositories/IChallengeRepository'
import IChallenge from '../dtos/IChallenge'

@injectable()
class GetFiveOldestCSharpSortedReposService {
  constructor(

    @inject('ChallengeRepository')
    private challengeRepository: IChallengeRepository,

  ) {}

  async execute(): Promise<IChallenge[] | undefined> {

    const repositories = await this.challengeRepository.getAllRepos()

    console.log(repositories)

    return repositories
  }
}

export default GetFiveOldestCSharpSortedReposService;
