import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller, onSubmit } from "react-hook-form";
import MapView, { Marker } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';


export default function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        selectedValue: '',
        lastName: '',
        firstName: '',
        address: '',
        email: '',
        phone: '',
        description: '',
    }
  });
  
  const [selectedValue, setSelectedValue] = useState('Stationnement');   // Liste déroulante 

  return (
    <View>
      <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Stationnement" value="Stationnement" />
          <Picker.Item label="Voirie" value="Voirie" />
          <Picker.Item label="Travaux" value="Travaux" />
          <Picker.Item label="Animaux" value="Animaux" />
        </Picker> 
      </View>



      <Controller 
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input}
            placeholder="Nom"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      <Controller
        control={control}
        rules={{
        required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input}
            placeholder="Prénom"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input}
            placeholder="Adresse"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="address"
      />

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input}
            placeholder="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
        required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input}
            placeholder="Téléphone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phone"
      />

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Text style={styles.input}
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />

      <View>
        <MapView
        style={styles.map}
        >

        </MapView>
      </View>

      <View>
        <Button title="Alerter" onPress={handleSubmit(onSubmit)} />
      </View>
      </View>
  );
}


const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#ffff',
  //   padding: 20,
    
  // },
  map: {
    marginLeft: '10%',
    // marginBottom: '3px',
    width: '80%',
    height: '60%',
    alignItems: 'center',
    borderWidth: '1px',
    borderRadius: '5px',
  },
  input: {
    margin: '2%',
    padding: '5%',
    borderWidth: '1px',
    borderRadius: '5px',
  },
});