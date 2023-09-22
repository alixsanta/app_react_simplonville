import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Form from '../components/Form';
import { ScrollView } from 'react-native';


export default function alert() {
  return (
    <ScrollView style={styles.container}>
        <View>
            <Text style={styles.txt}>Que souhaitez-vous nous signaler ?</Text>
        </View>
        <Form/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        // alignItems: 'center',

      },
    txt: {
        borderWidth:'1px',
        borderRadius: '5px',
        padding: '5%',
        marginBottom: '10%',
    },
});