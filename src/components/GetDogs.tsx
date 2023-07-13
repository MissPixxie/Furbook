import React, { createContext } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";

import IP from "../../fetchIP";
import { Dogs, useFetch } from "./FetchData";

interface Props {
  theme: any;
}

export const GetDogs = ({ theme }: Props) => {
  const thisTheme = theme.dark;
  const { colors } = theme;
  const { data, error, loading } = useFetch<Dogs[]>(IP + "/dogs");

  // loggas 3 gånger?!!
  console.log("getdogs component rendered");

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
            <Text style={{ fontSize: 26, color: colors.text }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>{item.age}</Text>
            <Text style={{ fontSize: 20, color: colors.text }}>{item.sex}</Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.breed}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.neutered}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.owner}
            </Text>
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
