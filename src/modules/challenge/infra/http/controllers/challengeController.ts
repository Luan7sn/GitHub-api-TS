import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetFiveOldestCSharpSortedReposService from '@modules/challenge/services/GetFiveOldestCSharpSortedReposService';

export default class ChallengeController {
  public async getRepositories(request: Request, response: Response): Promise<Response> {
    const getFiveOldestCSharpSortedReposService = container.resolve(GetFiveOldestCSharpSortedReposService)

    const repositories = await getFiveOldestCSharpSortedReposService.execute()

    return response.json(repositories)
  }
}