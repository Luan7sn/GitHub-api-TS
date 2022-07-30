export default interface IChallenge {
  full_name: string;
  owner: IUser;
  description: string;
}

interface IUser {
  avatar_url: string;
}