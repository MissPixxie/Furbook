import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export default function Input() {
  const [text, onChangeText] = React.useState('Usename');
  const [text2, onChangeText2] = React.useState('Password');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
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