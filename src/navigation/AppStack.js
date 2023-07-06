import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//SCREENS
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';
import MessagesScreen from '../screens/MessagesScreen';

// ICONS
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

const AppStack = () => {

  return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#123b3b',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerPosition: 'right',
            drawerLabelStyle: {
                fontSize: 16,
            }
        }}>
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{ 
            drawerIcon: ({color}) =>  (
                <Ionicons name="home" size={20} color={color} />
            )
            }} />
            <Drawer.Screen name="Messages" component={MessagesScreen} options={{ 
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons name="message" size={20} color="black" />
            )}}/>
          <Drawer.Screen name="Settings" component={SettingsScreen} options={{ 
            drawerIcon: ({color}) => (
                <Ionicons name="settings-sharp" size={20} color={color} />
            )}}/>
        </Drawer.Navigator>     
  );
}

export default AppStack
