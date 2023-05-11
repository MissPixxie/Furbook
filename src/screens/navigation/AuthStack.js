
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import ProfileScreen from '../ProfileScreen';
import Header from '../components/Header';



const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Sign in" component={SignInScreen} />
          <Stack.Screen name="Sign up" component={SignUpScreen} options={{title: 'Back'}}/>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>     
  );
}

export default AuthStack

