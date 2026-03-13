import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finalmente eu tenho um iPhone</Text>
      <Text style={styles.subtitle}>João Limão hahahaha</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'light',
  },
  subtitle: {
    color: '#d0ff84',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
