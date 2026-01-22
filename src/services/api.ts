import type { ItunesResponse } from '../models/Song.js';

export const fetchMusicData = async (searchTerm: string): Promise<ItunesResponse> => {
  const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song`);
  if (!response.ok) {
    throw new Error('Failed to fetch iTunes data');
  }
  return response.json() as Promise<ItunesResponse>;
};
