import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//SCREENS
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { BottomTabs } from "./BottomTabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { isLoggedIn, fixedContext } = useContext(AuthContext);

  // console.log(isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
