import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export default function Input() {
  const [name, SetName] = React.useState('Name');
  const [lastname, SetLastname] = React.useState('Lastname');
  const [email, SetMail] = React.useState('Email');
  const [number, SetNumber] = React.useState('');
  const [password, SetPassword] = React.useState('Password');
  const [matchpassword, SetMatchPassword] = React.useState('MatchPassword');

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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