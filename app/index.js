import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

export default function index() {
  return (
<View style={styles.container}>
    <Text style={styles.txt}>Bienvenue sur l'application SimplonVille !</Text>
    <Link style={styles.button} href='/alert'>Alerter</Link>
    <StatusBar style="auto" />
</View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: '100%',
      height: '100%',
    },
    txt: {
        fontSize: '15%',
    },
    button: {
        margin: '15%',
        borderWidth: '1px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '3%',
        paddingBottom: '3%',
    },
  });