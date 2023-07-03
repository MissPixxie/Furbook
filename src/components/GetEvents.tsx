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

interface Event {
  title: string;
  place: number;
  time: string;
  description: string;
  typeOfEvent: string;
  date: Date;
}

const GetEvents: React.FC<Props> = ({ theme }) => {
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
      const response = await fetch(IP + "/events");
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

export default GetEvents;

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
