//import IChallengeRepository from "@modules/challenge/repositories/IChallengeRepository";
import IChallengeRepository from '../../repositories/IChallengeRepository'
import Challenge from "../../dtos/IChallenge";
import axios from 'axios';

class ChallengeRepository implements IChallengeRepository{

  public async getAllRepos(): Promise<Challenge[] | undefined> {

    const gitBase = axios.create({
      baseURL: `https://api.github.com`,
    });

    const repositories = new Promise<Challenge[]>((resolve, reject) => {
      gitBase
        .get(`/users/takenet/repos`)
        .then((response) => {
          resolve(response.data as Challenge[])
        })
        .catch((error) => {
          reject([] as Challenge[])
        })
    })

    return await repositories
  }
}

export default ChallengeRepository
