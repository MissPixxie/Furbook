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

import IP from "../../fetchIP";
import { Entypo } from "@expo/vector-icons";

interface Props {
  theme: any;
}

interface Message {
  sender: string;
  receiver: number;
  message: {
    messageTitle: string;
    messageContent: string;
  };
  date: Date;
}

export const GetMessages = ({ theme }: Props) => {
  const thisTheme = theme.dark;
  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

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
      const response = await fetch(IP + "/users/messages");
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
