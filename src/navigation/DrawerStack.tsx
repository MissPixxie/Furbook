import React, { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from "@react-navigation/drawer";

//SCREENS
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { CustomDrawer } from "./CustomDrawer";
import { ThemeContext } from "../context/ThemeContext";

// ICONS
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DogsDetailsScreen } from "../screens/DogsDetailsScreen";

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <CustomDrawer navigation={navigation} />
      )}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <Ionicons name="menu" size={34} color="black" onPress={() => {}} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Settings" component={} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
};
