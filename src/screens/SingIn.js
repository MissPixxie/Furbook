import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, SafeAreaView, TextInput, Button } from "react-native";
import Buttons from "./components/Buttons";
import { LinearGradient } from 'expo-linear-gradient';


export default function SignIn({navigation}) {
  const [username, setUsername] = React.useState('Username');
  const [password, setPassword] = React.useState('Password');

    return (
            <LinearGradient
              colors={['#093129', '#69DEDE', '#093129']}
              style={styles.container}>

              <Text style={styles.title}>Login</Text>

                  <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                  />
                  <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                  />
                  <Buttons title="Sign in"/>

                  <Button style={styles.button} title="Sign up" onPress={ () => navigation.navigate('Sign Up')} /> 

                  <Pressable onPress={() => navigation.navigate('Sign up')}>
                      <Text style={styles.SignUp}>Sign up</Text>
                  </Pressable> 

                  <Pressable onPress={() => Alert.alert('Glömt lösenord')}>
                  <Text style={styles.text}>Forgot password?</Text>
                  </Pressable>          
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
      width: 300,
      height: 50,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      fontSize: 22,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginBottom: 50,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginTop: 50,
    },
    SignUp: {
      backgroundColor: 'lightblue',
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
    },
    button: {
      width: 300,
      height: 50,
      backgroundColor: 'pink',
    }
  });