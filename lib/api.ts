import type { Workout } from './types';

class ApiClient {
  readonly baseUrl: string = 'https://iwilsonq.com/api';

  constructor(baseUrl?: string) {
    if (baseUrl !== undefined) {
      this.baseUrl = baseUrl;
    }
  }
}

class WorkoutsClient extends ApiClient {
  async getAll(
    offset: number = 0,
    limit: number = 10
  ): Promise<Workout[]> {
    return new Promise((resolve, reject) => {
      fetch(
        `${this.baseUrl}/workouts?limit=${limit}&offset=${offset}`
      )
        .then((data) => data.json())
        .then((data) => resolve(data.records))
        .catch((err) => reject(err));
    });
  }
}

export const workoutsClient = new WorkoutsClient();
