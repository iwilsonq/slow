import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { palette } from './components/theme';
import WorkoutList from './screens/WorkoutList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WorkoutList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.appBackground,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
