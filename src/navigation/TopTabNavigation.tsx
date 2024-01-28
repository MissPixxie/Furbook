import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GetDogs } from "../components/GetDogs";
import { GetEvents } from "../components/GetEvents";
import { GetPlaces } from "../components/GetPlaces";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { SmallButton } from "../components/SmallButton";
import { SearchBar } from "@rneui/themed";
import { CustomCard } from "../components/CustomCard";
import { LinearGradient } from "expo-linear-gradient";

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
    tabBarLabel: {
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius: 5,
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
              backgroundColor: colors.background,
            },
            tabBarLabel: () => {
              return (
                <LinearGradient
                  colors={["#a7e05c", "#83a15d"]}
                  style={styles.tabBarLabel}
                >
                  <Text>Dogs</Text>
                </LinearGradient>
              );
            },
          }}
        />
        <Tab.Screen
          name="Events"
          component={GetEvents}
          options={{
            tabBarIndicatorStyle: { backgroundColor: "#992899" },
            tabBarContentContainerStyle: {
              backgroundColor: colors.background,
            },
            tabBarLabel: () => {
              return (
                <LinearGradient
                  colors={["#a7e05c", "#83a15d"]}
                  style={styles.tabBarLabel}
                >
                  <Text>Events</Text>
                </LinearGradient>
              );
            },
          }}
        />
        <Tab.Screen
          name="Places"
          component={GetPlaces}
          options={{
            tabBarIndicatorStyle: { backgroundColor: "#992899" },
            tabBarContentContainerStyle: {
              backgroundColor: colors.background,
            },
            tabBarLabel: () => {
              return (
                <LinearGradient
                  colors={["#a7e05c", "#83a15d"]}
                  style={styles.tabBarLabel}
                >
                  <Text>Places</Text>
                </LinearGradient>
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
