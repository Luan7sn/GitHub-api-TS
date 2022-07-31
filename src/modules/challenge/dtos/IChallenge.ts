export default interface IChallenge {
  full_name: string;
  owner: IUser;
  description: string;
  language: string;
  created_at: string;
}

interface IUser {
  avatar_url: string;
}