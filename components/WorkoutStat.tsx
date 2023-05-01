import { View, Text, StyleSheet } from 'react-native';
import { typography } from './theme';

interface Props {
  metric: string;
  value: string | number;
}

export function WorkoutStat(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={typography.paragraph}>{props.value}</Text>
      <Text style={typography.muted}>{props.metric}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 24,
  },
});
