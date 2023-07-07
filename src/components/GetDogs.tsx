import React, { createContext } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";

import IP from "../../fetchIP";

interface Props {
  theme: any;
}

interface Dog {
  name: string;
  age: number;
  sex: string;
  breed: string;
  neutered: boolean;
}

export const GetDogs = ({ theme }: Props) => {
  const thisTheme = theme.dark;
  const { colors } = theme;
  const [data, setData] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);

  // loggas 3 gånger?!!
  console.log("getdogs component rendered");

  useEffect(() => {
    fetchPosts();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(IP + "/dogs");
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
      const test = JSON.stringify(jsonData);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

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
