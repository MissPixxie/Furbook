import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { DrawerStack } from "./DrawerStack";

//CONTEXT
import { ThemeContext } from "../context/ThemeContext";

//SCREENS
import { DogsScreen } from "../screens/DogsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { MessagesScreen } from "../screens/MessagesScreen";
import { NotificationScreen } from "../screens/NotificationsScreen";
import { SearchScreen } from "../screens/SearchScreen";

//ICONS
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

interface Props {
  user?: string;
}

export const TabNavigator = ({ user }: Props) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<any>();
  const { colors } = theme;
  const { tabBar } = colors;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <LinearGradient colors={tabBar} style={{ height: 70 }} />
        ),
        tabBarInactiveTintColor: "#51951a",
        tabBarActiveTintColor: "#294d0d",
      }}
    >
      <Tab.Screen
        name="Home2"
        component={DrawerStack}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <Ionicons
              name="menu"
              size={34}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dogs"
        component={DogsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paw" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="envelope" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
