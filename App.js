import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jamaal Connect</Text>
      <Text style={styles.subText}>App-kaagu waa uu dhismay!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#6C3BFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 10,
  },
});
