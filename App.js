import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStack from './src/screens/navigation/AppStack';
import AuthStack from './src/screens/navigation/AuthStack';


export default function App() {

  return (
      <NavigationContainer>
        {/*<AppStack />*/}
        <AuthStack />
      </NavigationContainer>    
  );
}

