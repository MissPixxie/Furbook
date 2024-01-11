import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GetDogs } from "../components/GetDogs";
import { GetEvents } from "../components/GetEvents";
import { GetPlaces } from "../components/GetPlaces";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { SmallButton } from "../components/SmallButton";
import { GradientTabIndicator } from "./GradientTabIndicator";
import { SearchBar } from "@rneui/themed";
import { CustomCard } from "../components/CustomCard";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const [search, setSearch] = useState<string>("");
  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const styles = StyleSheet.create({
    tabBarContainerStyle: {
      backgroundColor: "blue",
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: colors.background }}>
        <View>
          <SmallButton
            title="Filter"
            bgColor="#bced95"
            align="flex-end"
            margin={10}
            onPress={() => {}}
          />
        </View>
        <View>
          <SearchBar
            containerStyle={{
              backgroundColor: colors.primary,
              borderBottomColor: "transparent",
              borderTopColor: "transparent",
            }}
            inputContainerStyle={{
              backgroundColor: "#fff",
            }}
            searchIcon={{
              size: 26,
              color: "black",
            }}
            inputStyle={{
              fontSize: 16,
              color: "black",
            }}
            placeholderTextColor={"black"}
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
          />
        </View>
      </SafeAreaView>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: colors.card },
          tabBarLabelStyle: { color: colors.text },
        }}
        sceneContainerStyle={{
          backgroundColor: colors.background,
        }}
      >
        <Tab.Screen
          name="Dogs"
          component={GetDogs}
          options={{
            tabBarIndicatorStyle: { backgroundColor: "#992899" },
            tabBarContentContainerStyle: {
              backgroundColor: colors.secondary,
            },
            tabBarItemStyle: {
              backgroundColor: colors.secondaryLight,
              borderRadius: 5,
            },
            tabBarGap: 10,

            // tabBarLabel: () => <SmallButton title="Dogs" bgColor="#e2e2e2" />,
          }}
          // options={{
          //   tabBarIcon: () => (
          //     <FontAwesome name="envelope" size={34} color={colors.text} />
          //   ),
          // }}
        />
        <Tab.Screen
          name="Events"
          component={GetEvents}
          options={{
            tabBarIndicatorStyle: { backgroundColor: "#992899" },
          }}
        />
        <Tab.Screen
          name="Places"
          component={GetPlaces}
          options={{
            tabBarIndicatorStyle: { backgroundColor: "#992899" },
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
