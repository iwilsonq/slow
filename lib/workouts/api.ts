import useSWR, { SWRResponse } from 'swr';
import { BASE_URL, queryString } from '../api';
import type { Workout } from './types';

interface FetcherArgs {
  path: string;
  params: { [k: string]: string | number };
}

function fetcher<T>({ path, params }: FetcherArgs): Promise<T> {
  const query = queryString(params);

  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${path}${query}`)
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
    { path: '/api/workouts', params: { offset, limit } },
    fetcher
  );
}
