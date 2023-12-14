import React, { createContext, useContext } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";
import { Dogs } from "./Types";

import IP from "../../fetchIP";
import { useFetch } from "./FetchData";
import { ThemeContext } from "../context/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import { DogItem } from "./DogItem";

export const GetDogs = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;
  const { colors } = theme;

  console.log("GetDogs rendered");

  //const { data, error, loading } = useFetch<Dogs[]>(IP + "/dogs");

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const { data } = useQuery({
    queryKey: ["dogs"],
    queryFn: async () => {
      const response = await fetch(IP + "/dogs");
      if (response) {
        console.log("Success");
      }
      return response.json();
    },
  });

  const itemFromList = ({ item }: { item: Dogs }) => {
    return <DogItem item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={itemFromList}
        keyExtractor={(item) => item._id.toString()}
      />
    </SafeAreaView>
  );
};
