import { injectable, inject } from 'tsyringe';
//import IChallengeRepository from '@modules/challenge/repositories/IChallengeRepository';
import IChallengeRepository from '../repositories/IChallengeRepository'
import IChallenge from '../dtos/IChallenge'
import AppError from '../../../shared/errors/AppError';

@injectable()
class GetFiveOldestCSharpSortedReposService {
  constructor(

    @inject('ChallengeRepository')
    private challengeRepository: IChallengeRepository,

  ) {}

  async execute(): Promise<IChallenge[] | undefined> {

    const repositories = await this.challengeRepository.getAllRepos()

    if(!repositories){
      throw new AppError("this user doesn't have any repository")
    }

    const cSharpRepositories = repositories.filter(repository => repository.language === "C#")

    const sortedCSharpRepositories = cSharpRepositories.sort(function(a, b){
      if (a.created_at < b.created_at) {
        return -1
      } else {
        return 1
      }
    })

    let oldestCSharpRepositories = [] as IChallenge[]

    for(let i = 0; i < 5; i++){
      oldestCSharpRepositories.push(sortedCSharpRepositories[i])
    }

    return oldestCSharpRepositories
  }
}

export default GetFiveOldestCSharpSortedReposService;
