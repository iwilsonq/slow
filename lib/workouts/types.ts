export interface Workout {
  id: string;
  name: string;
  distance: number;
  duration: number;
  startTime: string;
  totalAscent: number;
  totalDescent: number;
  maxAltitude: number;
  avgHeartRate: number;
  maxHeartRate: number;
  avgCadence: number;
  totalCalories: number;
  avgSpeed: number;
  maxSpeed: number;
}
