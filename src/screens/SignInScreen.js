import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, SafeAreaView, TextInput, Button } from "react-native";
import Buttons from "./components/CustomButton";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


export default function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('Username');
  const [password, setPassword] = React.useState('Password');

    return (
            <LinearGradient
              colors={['#093129', '#69DEDE', '#093129']}
              style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                      <View style={styles.input}>
                      <Ionicons name="person" size={24} color="black" />
                        <TextInput
                          onChangeText={setUsername}
                          value={username}
                          style={styles.inputText}
                        />                      
                      </View>
                      <View style={styles.input}>
                        <Ionicons name="lock-closed-outline" size={24} color="black" />
                        <TextInput
                          secureTextEntry={true}
                          onChangeText={setPassword}
                          value={password}
                          style={styles.inputText}
                        />                        
                      </View>

                        {/*<Buttons title="Sign in"/>*/}

                        <Pressable onPress={() => navigation.navigate('Profile')}>
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