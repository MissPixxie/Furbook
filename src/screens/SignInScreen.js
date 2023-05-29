import React from "react";
import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Alert, SafeAreaView, TextInput, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import IP from "../../fetchIP";
import { Ionicons } from '@expo/vector-icons';


export default function SignInScreen({navigation}) {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  
  async function signIn () {
    
    try {
      const response = await fetch(IP + '/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
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
            <LinearGradient
              colors={['#093129', '#69DEDE', '#093129']}
              style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                      <View style={styles.input}>
                      <Ionicons name="person" size={24} color="black" />
                        <TextInput
                          onChangeText={setMail}
                          value={email}
                          placeholder='Email'
                          style={styles.inputText}
                        />                      
                      </View>
                      <View style={styles.input}>
                        <Ionicons name="lock-closed-outline" size={24} color="black" />
                        <TextInput
                          secureTextEntry={true}
                          onChangeText={setPassword}
                          value={password}
                          placeholder="Password"
                          style={styles.inputText}
                        />                        
                      </View>

                        {/*<Buttons title="Sign in"/>*/}

                        <Pressable onPress={signIn}>
                            <Text style={styles.SignInButton}>Sign in</Text>
                        </Pressable> 

                        <Pressable onPress={() => navigation.navigate('Sign up')}>
                            <Text style={styles.SignUpButton}>Register</Text>
                        </Pressable> 



                        <Pressable onPress={() => Alert.alert('Glömt lösenord')}>
                        <Text style={styles.forgotPasswordButton}>Forgot password?</Text>
                        </Pressable>                    
                </SafeAreaView>       
            </LinearGradient>     
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      flexDirection: 'row',
      width: 300,
      height: 50,
      margin: 10,
      borderRadius: 5,
      padding: 10,
      backgroundColor: 'white',
    },
    inputText: {
      marginLeft: 13,
      fontSize: 18,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginBottom: 50,
    },
    forgotPasswordButton: {
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginTop: 50,
    },
    SignInButton: {
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
    SignUpButton: {
      backgroundColor: 'white',
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
      color: 'black',
      marginTop: 20,
      borderWidth: 2,
      borderColor: '#123b3b',
    },
    button: {
      width: 300,
      height: 50,
      backgroundColor: 'pink',
    }
  });