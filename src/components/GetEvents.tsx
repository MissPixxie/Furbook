import React, { createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";
import { useFetch } from "./FetchData";
import { Events } from "./Types";

import IP from "../../fetchIP";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { EventItem } from "./EventItem";
import { useQuery } from "@tanstack/react-query";

export const GetEvents = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  //const { data, error, loading } = useFetch<Events[]>(IP + "/events");
  const { colors } = theme;

  console.log("GetEvents rendered");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await fetch(IP + "/events");
      return response.json();
    },
  });

  const itemFromList = ({ item }: { item: Events }) => {
    return <EventItem item={item} />;
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
