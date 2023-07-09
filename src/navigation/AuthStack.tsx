import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";

//CONTEXT
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

//SCREENS
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { TabNavigator } from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { tabBar } = colors;

  return (
    <NavigationContainer>
      {state.isLoggedIn ? (
        <TabNavigator />
      ) : (
        <Stack.Navigator>
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
