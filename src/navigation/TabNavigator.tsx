import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { DrawerStack } from "./DrawerStack";
import { useNavigation } from "@react-navigation/native";

//CONTEXT
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

//SCREENS
import { DogsScreen } from "../screens/DogsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { MessagesScreen } from "../screens/MessagesScreen";
import { NotificationScreen } from "../screens/NotificationsScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { DogsDetailsScreen } from "../screens/DogsDetailsScreen";

//ICONS
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { TopTabNavigation } from "./TopTabNavigation";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const { state, setState } = useContext(AuthContext);
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
        name={state.user.userName}
        component={DrawerStack}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={34}
              color="black"
              style={{ marginRight: 20 }}
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
          headerShown: true,
          title: "My dogs",
          headerStyle: {
            backgroundColor: colors.card,
          },
          headerTintColor: colors.text,
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paw" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dog Details"
        component={DogsDetailsScreen}
        options={{
          title: "",
          tabBarItemStyle: { display: "none" },
          headerShown: true,
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={36}
              style={{ marginLeft: 15 }}
              color={colors.text}
              onPress={() => navigation.navigate("Dogs")}
            />
          ),
          headerStyle: {
            backgroundColor: colors.card,
          },
          headerTintColor: colors.text,
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Messages"
        component={TopTabNavigation}
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
