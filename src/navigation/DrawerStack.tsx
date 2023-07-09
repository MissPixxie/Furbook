import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//SCREENS
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { CustomDrawer } from "./CustomDrawer";

// ICONS
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthStack } from "./AuthStack";
import { TabNavigator } from "./TabNavigator";

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  console.log("drawer navigator rendered");
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <CustomDrawer navigation={navigation} />
      )}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#123b3b",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerPosition: "right",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
