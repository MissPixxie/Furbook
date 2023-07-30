import React, { createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { Events, useFetch } from "./FetchData";

import IP from "../../fetchIP";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Card } from "@rneui/themed";
import { ThemeContext } from "../context/ThemeContext";

export const GetEvents = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data, error, loading } = useFetch<Events[]>(IP + "/events");
  const thisTheme = theme.dark;
  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [isActive, setActive] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const toggleSavedItems = () => {
    setActive((prevState) => !prevState);
    console.log(isActive);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
    postContainer: {
      width: "100%",
      marginBottom: 20,
      backgroundColor: colors.card,
      alignSelf: "center",
      padding: 15,
      borderRadius: 10,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    arrowButton: {
      alignSelf: "center",
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
            {isActive ? (
              <AntDesign
                name="pushpino"
                size={24}
                color="black"
                style={{ alignSelf: "flex-end" }}
                onPress={toggleSavedItems}
              />
            ) : (
              <AntDesign
                name="pushpin"
                size={24}
                color="black"
                style={{ alignSelf: "flex-end" }}
                onPress={toggleSavedItems}
              />
            )}
            <Text style={{ fontSize: 26, color: colors.text }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.place}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.time}
            </Text>
            <Pressable
              onPress={() => {
                setIsVisable(!isVisable);
              }}
              style={styles.arrowButton}
            >
              {isVisable ? (
                <Entypo name="chevron-thin-up" size={42} color={colors.text} />
              ) : (
                <Entypo
                  name="chevron-thin-down"
                  size={42}
                  color={colors.text}
                />
              )}
            </Pressable>
            {isVisable && (
              <View>
                <Text style={{ fontSize: 20, color: colors.text }}>
                  {item.description}
                </Text>
                <Text style={{ fontSize: 20, color: colors.text }}>
                  {item.typeOfEvent}
                </Text>
              </View>
            )}
            {item.date && <Text>{item.date.toString()}</Text>}
          </View>
        )}
      />
    </SafeAreaView>
  );
};
