import { StyleSheet, Text, View } from 'react-native';
import Box from "./components/Box"

export default function App() {
  return (
    <View style={styles.container}>
      <Box />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
});
