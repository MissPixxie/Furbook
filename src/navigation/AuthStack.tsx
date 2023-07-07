import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";

//CONTEXT
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

//SCREENS
import { HomeScreen } from "../screens/HomeScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { NotificationScreen } from "../screens/NotificationsScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { MessagesScreen } from "../screens/MessagesScreen";
import { DogsScreen } from "../screens/DogsScreen";

//ICONS
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AuthStack = () => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { tabBar } = colors;

  return (
    <NavigationContainer>
      {state.isLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarBackground: () => (
              <LinearGradient colors={tabBar} style={{ height: 70 }} />
            ),
            tabBarInactiveTintColor: "#51951a",
            tabBarActiveTintColor: "#294d0d",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Dogs"
            component={DogsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="paw" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="envelope" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="search" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
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
