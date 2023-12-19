import React, { createContext, useContext } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";
import { Dogs } from "./Types";

import IP from "../../fetchIP";
import { useFetch } from "./FetchData";
import { ThemeContext } from "../context/ThemeContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DogItem } from "./DogItem";
import { dataFetch } from "../Hooks/useDataFetch";
//import { useDataFetch } from "../Hooks/useDataFetch";

export const GetDogs = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;
  const { colors } = theme;

  console.log("GetDogs rendered");

  // const queryClient = useQueryClient();

  // //const { prefetchDogs } = queryClient.getQueryData("dogs");
  const { data, isLoading, error } = useQuery({
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
    <View style={{ marginTop: 10 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#3d8228" />
      ) : (
        <FlatList
          data={data}
          renderItem={itemFromList}
          keyExtractor={(item) => item._id.toString()}
        />
      )}
    </View>
  );
};
