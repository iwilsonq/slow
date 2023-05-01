import { View, Text, StyleSheet } from 'react-native';
import { toMiles } from '../lib/distance';
import { formatTime } from '../lib/time';
import type { Workout } from '../lib/types';
import { palette, typography } from './theme';
import { WorkoutStat } from './WorkoutStat';

interface Props {
  workout: Workout;
}

export function WorkoutRow({ workout }: Props) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={typography.heading}>{workout.name}</Text>
      </View>
      <View style={styles.contents}>
        <WorkoutStat
          metric="Miles"
          value={toMiles(workout.distance).toFixed(2)}
        />
        <WorkoutStat
          metric="Time"
          value={formatTime(workout.duration)}
        />
        <WorkoutStat metric="HR" value={workout.avgHeartRate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: palette.componentBackground,
    marginBottom: 12,
    borderRadius: 4,
    padding: 8,
    borderColor: palette.primary,
    borderWidth: 1,
    shadowColor: palette.primary,
    shadowOpacity: 0.8,
    shadowOffset: { height: 1, width: 3 },
    shadowRadius: 4,
  },
  contents: {
    flexDirection: 'row',
  },
});
