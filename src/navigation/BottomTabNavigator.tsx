import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
  BottomTabBarHeightContext,
} from "@react-navigation/bottom-tabs";
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
import BottomTabSVG from "../components/BottomTabSVG";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Svg, { Ellipse, G, Path } from "react-native-svg";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const { state, setState } = useContext(AuthContext);
  const navigation = useNavigation<any>();
  const { colors } = theme;
  const { tabBar } = colors;

  const styles = StyleSheet.create({
    tabBackground: {
      position: "absolute",
      top: 10,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // overflow: "hidden",
      // backgroundColor: "transparent",
      // margin: 0,
    },
  });

  return (
    <BottomTabBarHeightContext.Consumer>
      {(tabBarHeight) => (
        <BottomTab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              borderTopWidth: 0,
              borderColor: "transparent",
              elevation: 0,
              height: 100,
            },
            tabBarBackground: () => (
              <BottomTabSVG style={styles.tabBackground} />
            ),
            tabBarInactiveTintColor: "#51951a",
            tabBarActiveTintColor: "#294d0d",
          }}
        >
          <BottomTab.Screen
            name={state.user.userName}
            component={DrawerStack}
            options={{
              headerTitleAlign: "center",
              headerRight: () => (
                <Ionicons
                  name="settings-outline"
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
          <BottomTab.Screen
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
          <BottomTab.Screen
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
          <BottomTab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="envelope" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Search"
            component={TopTabNavigation}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="search" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Notifications"
            component={NotificationScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications" size={size} color={color} />
              ),
            }}
          />
        </BottomTab.Navigator>
      )}
    </BottomTabBarHeightContext.Consumer>
  );
};
