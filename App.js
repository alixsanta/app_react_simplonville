import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Form from './components/Form';


export default function App() {
  return (
    <><View style={styles.container}>
    <Text>Bienvenue sur le site de SimplonVille !</Text>
    <StatusBar style="auto" />
</View>
      <Form />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});