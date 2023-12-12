import React, { createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";
import { useFetch } from "./FetchData";
import { Events } from "./Types";

import IP from "../../fetchIP";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { EventItem } from "./EventItem";

export const GetEvents = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data, error, loading } = useFetch<Events[]>(IP + "/events");
  const { colors } = theme;

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

  const itemFromList = ({ item }: { item: Events }) => {
    return <EventItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={itemFromList}
        keyExtractor={(item) => item._id.toString()}
      />
    </SafeAreaView>
  );
};
