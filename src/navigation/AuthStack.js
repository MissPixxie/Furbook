
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


//SCREENS
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlacesScreen from '../screens/PlacesScreen';
import EventssScreen from '../screens/EventsScreen';



const Stack = createNativeStackNavigator();

const AuthStack = () => {


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign in"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign up"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Places" component={PlacesScreen} />
      <Stack.Screen name="Events" component={EventssScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack

