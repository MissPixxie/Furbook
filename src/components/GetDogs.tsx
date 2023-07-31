import React, { createContext, useContext } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";

import IP from "../../fetchIP";
import { Dogs, useFetch } from "./FetchData";
import { ThemeContext } from "../context/ThemeContext";

export const GetDogs = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;
  const { colors } = theme;

  const { data, error, loading } = useFetch<Dogs[]>(IP + "/dogs");

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: colors.background,
    },
    postContainer: {
      width: "100%",
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: colors.card,
      padding: 15,
      borderRadius: 10,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    imgAvatar: {
      width: 100,
      height: 100,
      borderRadius: 400 / 2,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image
              style={styles.imgAvatar}
              source={require("../Images/OGBUB40.jpg")}
            />
            <View style={{ marginLeft: 15, alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 26, color: colors.text }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 18, color: colors.text }}>
                {item.sex}
              </Text>
              <Text style={{ fontSize: 18, color: colors.text }}>
                {item.breed}
              </Text>
              <Text style={{ fontSize: 18, color: colors.text }}>
                {item.neutered}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: colors.text,
                flexGrow: 2,
                textAlign: "right",
                marginRight: 10,
              }}
            >
              {item.age}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
