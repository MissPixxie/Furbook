import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext, useEffect, useState } from "react";
import { CustomDrawer } from "./CustomDrawer";

//CONTEXT
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

//SCREENS
import { NavigationContainer } from "@react-navigation/native";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../.firebase";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { TabNavigator } from "./TabNavigator";

interface Props {
  children: React.ReactNode;
}

const Drawer = createDrawerNavigator();

export const AuthStack = () => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { tabBar, drawer } = colors;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

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
            backgroundColor: colors.primary,
          },
        }}
      >
        {user ? (
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
