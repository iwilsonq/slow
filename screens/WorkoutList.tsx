import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { palette, typography } from '../components/theme';
import { WorkoutRow } from '../components/WorkoutRow';
import { workoutsClient } from '../lib/api';
import { Workout } from '../lib/types';

export default function WorkoutList() {
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    fetchWorkouts(offset, limit);
  }, [offset, limit]);

  async function fetchWorkouts(
    offset: number,
    limit: number
  ): Promise<void> {
    const results = await workoutsClient.getAll();
    setWorkouts(results);
  }
  return (
    <View style={styles.container}>
      <Text style={typography.title}>Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={({ item }) => <WorkoutRow workout={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    marginHorizontal: 16,
  },
});
