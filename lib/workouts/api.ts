import useSWR, { SWRResponse } from 'swr';
import { BASE_URL, queryString } from '../api';
import type { Workout } from './types';

interface FetcherArgs {
  url: string;
  args: { [key: string]: string | number };
}

function fetcher<T>({ url, args }: FetcherArgs): Promise<T> {
  const query = queryString(args);

  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}${query}`)
      .then((data) => data.json())
      .then((data) => resolve(data.records))
      .catch((err) => reject(err));
  });
}

interface UseWorkoutsParams {
  offset: number;
  limit: number;
}

export function useWorkouts(
  { offset, limit }: UseWorkoutsParams = { offset: 0, limit: 10 }
): SWRResponse<Workout[], string> {
  return useSWR<Workout[]>(
    { url: '/api/workouts', args: { offset, limit } },
    fetcher
  );
}
