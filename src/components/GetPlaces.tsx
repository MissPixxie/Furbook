import React, { createContext, useCallback } from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import IP from "../../fetchIP";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { CustomButton } from "./CustomButton";
import { RefreshControl } from "react-native-gesture-handler";
import { Button } from "@rneui/themed";

interface Props {
  theme: any;
  setModalVisible: any;
}

interface Place {
  _id: string;
  name: string;
  location: string;
  category: string;
  description: string;
  date: Date;
  comments: {
    commentTitle: string;
    commentText: string;
  };
}

interface Rating {
  _id: string;
  paw: number;
}

export const GetPlaces = ({ setModalVisible, theme }: Props) => {
  const thisTheme = theme.dark;

  console.log("getplaces component rendered");

  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [data, setData] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(IP + "/places");
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
      const test = JSON.stringify(jsonData);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  async function pawRating(paw: number, _id: string) {
    try {
      const response = await fetch(IP + "/places/newrating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paw: paw,
          _id: _id,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          Alert.alert(data.message);
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

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
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.location}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.category}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.description}
            </Text>
          </View>
        )}
        // ListFooterComponent={
        //   <CustomButton
        //     title="Add new place"
        //     onPress={() => setModalVisible(true)}
        //     bgColor="#bced95"
        //   />
        // }
      />
      <Entypo
        name="circle-with-plus"
        size={64}
        color="black"
        style={{
          position: "absolute",
          top: "86%",
          left: "87%",
          backgroundColor: "#bced95",
          borderRadius: 50,
          shadowColor: "black",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 5,
        }}
        onPress={() => setModalVisible(true)}
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
  postComments: {
    marginVertical: 5,
    fontSize: 18,
    color: "green",
  },
  reviewContainer: {
    flexDirection: "row",
    columnGap: 5,
  },
});
