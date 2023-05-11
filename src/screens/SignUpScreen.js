import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Pressable, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from './components/CustomButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';



export default function SignUpScreen({navigation}) {
  
  const [name, SetName] = React.useState('Full name');
  const [email, SetMail] = React.useState('Email');
  const [number, SetNumber] = React.useState('');
  const [password, SetPassword] = React.useState('Password');
  const [matchpassword, SetMatchPassword] = React.useState('MatchPassword');

  return (
    <LinearGradient colors={['#093129', '#69DEDE', '#093129']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputs}>
        <View style={styles.InputContainer}>
            <Ionicons name="person" size={24} color="black" />
            <TextInput
                style={styles.inputText}
                SetText={SetName}
                value={name}
            />        
        </View>
            <View style={styles.InputContainer}>
              <MaterialIcons name="alternate-email" size={24} color="black" />
              <TextInput
                  style={styles.inputText}
                  SetText={SetMail}
                  value={email}
              />              
            </View>
            <View style={styles.InputContainer}>
              <Foundation name="telephone" size={24} color="black" />
              <TextInput
                  style={styles.inputText}
                  SetText={SetNumber}
                  value={number}
                  placeholder="Phone number"
                  keyboardType="numeric"
              />            
            </View>

            <View style={styles.InputContainer}>
              <Ionicons name="lock-closed-outline" size={24} color="black" />
              <TextInput
                  secureTextEntry={true}
                  style={styles.inputText}
                  SetText={SetPassword}
                  value={password}
              />              
            </View>
            <View style={styles.InputContainer}>
              <Ionicons name="lock-closed-outline" size={24} color="black" />
              <TextInput
                  secureTextEntry={true}
                  style={styles.inputText}
                  SetText={SetMatchPassword}
                  value={matchpassword}
              />
            </View>
        </View>


            <CustomButton title="Sign up"/>
            <Text style={styles.text}>Already have an account?</Text>
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.SigninText}>Sign in</Text>
            </Pressable> 

      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  InputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  inputText: {
    width: 300,
    margin: 10,
    padding: 5,
    fontSize: 22,
    backgroundColor: 'white',
    borderBottomColor: 'black',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  SigninText: {
    fontSize: 18,
    color: 'white',
  }
});