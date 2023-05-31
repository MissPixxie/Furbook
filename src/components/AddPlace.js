import React from 'react';
import { useState, useEffect, useRef } from "react";
import {SafeAreaView, StyleSheet, TextInput, Text, Pressable, View, Alert } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IP from '../../fetchIP'

import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




export default function AddPlace() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');



  
  async function newPlace () {
    
    try {
      const response = await fetch(IP + '/places/newplace', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          category: category,
          location: location,
          description: description,
        })
      })
      .then((resp) => resp.json())
      .then((data) => {
        Alert.alert(data.message);
      })
    }
    catch (error) {
      console.log(error.message)
    }
  }


  return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
            <View style={styles.inputs}>
                <View style={styles.Input}>
                    <Entypo name="location-pin" size={24} color="black" />
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder='Name'
                        style={styles.inputText}
                    />        
                </View>
                <View style={styles.Input}>
                  <Foundation name="telephone" size={24} color="black" />
                  <TextInput
                      onChangeText={setLocation}
                      value={location}
                      style={styles.inputText}
                      placeholder="Location"
                  />            
                </View>
                <View style={styles.Input}>
                  <MaterialIcons name="category" size={24} color="black" />
                  <TextInput
                      onChangeText={setCategory}
                      value={category}
                      placeholder='Category'
                      style={styles.inputText}
                  />              
                </View>
                <View style={styles.Input}>
                  <Entypo name="pencil" size={24} color="black" />
                  <TextInput
                      onChangeText={setDescription}
                      value={description}
                      placeholder='Description'
                      style={styles.inputText}
                  />              
                </View>
            </View>


                <Pressable onPress={newPlace}>
                    <Text style={styles.addButton}>Add new place</Text>
                </Pressable>           
        </KeyboardAwareScrollView>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  Input: {
    flexDirection: 'row',
    width: 300,
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  inputText: {
    marginLeft: 13,
    fontSize: 18,
    borderBottomColor: 'black',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#0a2121',
    width: 300,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#0a2121',
  },
  SigninText: {
    fontSize: 18,
    color: 'white',
  }
});