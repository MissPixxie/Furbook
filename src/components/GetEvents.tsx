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
import { Events, useFetch } from "./FetchData";

import IP from "../../fetchIP";
import { Entypo } from "@expo/vector-icons";

interface Props {
  theme: any;
}

export const GetEvents = ({ theme }: Props) => {
  const { data, error, loading } = useFetch<Events[]>(IP + "/events");
  const thisTheme = theme.dark;
  const { colors } = theme;

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
  arrowButton: {
    alignSelf: "center",
  },
  filterButton: {
    width: "30%",
    backgroundColor: "#bced95",
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  filterButtonText: {
    textAlign: "center",
    fontSize: 20,
  },
  openModalButton: {
    width: "80%",
    backgroundColor: "#264026",
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 26,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
  postComments: {
    marginVertical: 5,
    fontSize: 18,
  },
  metaComments: {
    fontSize: 18,
  },
  reviewContainer: {
    flexDirection: "row",
    columnGap: 5,
  },
});
