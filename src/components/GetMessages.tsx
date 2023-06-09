import React, { createContext } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { Messages, useFetch } from "./FetchData";

import IP from "../../fetchIP";
import { Entypo } from "@expo/vector-icons";

interface Props {
  theme: any;
}

export const GetMessages = ({ theme }: Props) => {
  const thisTheme = theme.dark;
  const { colors } = theme;
  const { data, error, loading } = useFetch<Messages[]>(IP + "/users/messages");

  const [isVisable, setIsVisable] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {isVisable ? (
              <Entypo name="chevron-thin-up" size={42} color={colors.text} />
            ) : (
              <Entypo name="chevron-thin-down" size={42} color={colors.text} />
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 15,
  },
  postContainer: {
    width: "100%",
    marginVertical: 10,
    alignSelf: "center",
    padding: 15,
    borderBottomColor: "#bced95",
    borderBottomWidth: 2,
  },
});
