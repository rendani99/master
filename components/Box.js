import React from 'react';
import { View, Text } from 'react-native';

export default function componentName() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Box</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  box:{backgroundColor:"#fff",
padding},
text: {fontSize: 24,
fontWeight: "bold",
textAlign:"center"},

})