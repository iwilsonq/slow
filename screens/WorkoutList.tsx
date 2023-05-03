import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from '../components/theme';
import { WorkoutRow } from '../components/WorkoutRow';
import { useWorkouts } from '../lib/workouts/api';

export default function WorkoutList() {
  const { data: workouts, isLoading, error } = useWorkouts();

  console.log(isLoading, workouts);
  return (
    <View style={styles.container}>
      <Text style={typography.title}>Workouts</Text>
      {isLoading ? (
        <Text style={typography.paragraph}>Loading...</Text>
      ) : (
        <FlatList
          data={workouts}
          renderItem={({ item }) => <WorkoutRow workout={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
