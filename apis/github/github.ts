import apiIns from '@apis/apiIns';
import { IGithubProfile } from './github.interface';

export async function getUserProfile(username: string): Promise<IGithubProfile> {
  const response = await apiIns.get<IGithubProfile>(`https://api.github.com/users/${username}`);
  return response.data;
}
