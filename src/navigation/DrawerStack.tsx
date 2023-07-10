import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from "@react-navigation/drawer";

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

// headerleft: null ???

export const DrawerStack = () => {
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
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
