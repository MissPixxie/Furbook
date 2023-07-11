import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { CustomDrawer } from "./CustomDrawer";

//CONTEXT
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

//SCREENS
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { TabNavigator } from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export const AuthStack = () => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { tabBar } = colors;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={({ navigation }) => (
          <CustomDrawer navigation={navigation} />
        )}
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
          drawerStyle: {
            backgroundColor: theme.colors.secondary,
          },
        }}
      >
        {state.isLoggedIn ? (
          <Drawer.Screen
            name="Tab Navigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Drawer.Screen
              name="Sign in"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Sign up"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
