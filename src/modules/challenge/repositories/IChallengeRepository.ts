import IChallenge from '../dtos/IChallenge'

export default interface IChallengeRepository {
  getAllRepos() : Promise<IChallenge[] | undefined>
}
