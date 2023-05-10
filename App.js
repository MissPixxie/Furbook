import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SingIn';
import Profile from './src/screens/Profile';
import Header from './src/screens/components/Header';



export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign in" component={SignIn} options={{headerShown: false}} />
          <Stack.Screen name="Sign up" component={SignUp} options={{title: 'Back'}}/>
          <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: () => <Header /> }} />
        </Stack.Navigator>     
      </NavigationContainer>      
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
