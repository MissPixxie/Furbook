import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignIn from './src/screens/SingIn';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SignIn />
        <StatusBar style="auto" />
      </View>      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d6d7e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
