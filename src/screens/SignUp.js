import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import Buttons from './components/Buttons';
import { LinearGradient } from 'expo-linear-gradient';



export default function SignUp({navigation}) {
  const [name, SetName] = React.useState('Name');
  const [lastname, SetLastname] = React.useState('Lastname');
  const [email, SetMail] = React.useState('Email');
  const [number, SetNumber] = React.useState('');
  const [password, SetPassword] = React.useState('Password');
  const [matchpassword, SetMatchPassword] = React.useState('MatchPassword');

  return (
    <LinearGradient
    colors={['#093129', '#69DEDE', '#093129']}
    style={styles.container}>
      <Text>{this.navigation}</Text>
        <TextInput
            style={styles.input}
            SetText={SetName}
            value={name}
        />
        <TextInput
            style={styles.input}
            SetText={SetLastname}
            value={lastname}
        />
        <TextInput
            style={styles.input}
            SetText={SetMail}
            value={email}
        />
        <TextInput
            style={styles.input}
            SetText={SetNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
        <TextInput
            secureTextEntry={true}
            style={styles.input}
            SetText={SetPassword}
            value={password}
        />
        <TextInput
            secureTextEntry={true}
            style={styles.input}
            SetText={SetMatchPassword}
            value={matchpassword}
        />
        <Buttons title="Sign up"/>
    </LinearGradient>
  );
};

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
});