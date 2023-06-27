import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import IP from "../../fetchIP";

import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import TextComponent from "./TextComponent";

export default function Places({ setModalVisible, theme }) {
  //console.log('getplaces component rendered');

  const thisTheme = theme.dark;

  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(IP + "/places");
      const data = await response.json();
      setData(data);
      setLoading(false);
      const test = JSON.stringify(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  async function pawRating(paw, _id) {
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
      console.log(error.message);
    }
  }

  // const paws = [];
  // function pawRating(paw) {
  //   paws.push(paw);
  //   console.log(paws);

  //   const avarage = (paws) => {
  //     sum = 0;
  //     paws.forEach((element) => {
  //       sum += element;
  //     });
  //     return sum / paws.length;
  //   };
  //   console.log(avarage);
  // }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => Alert.alert("pressed")}>
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
              <Text
                style={styles.postComments}
                onPress={() => {
                  setIsVisable(!isVisable);
                }}
              >
                Comments
              </Text>
              {isVisable && (
                <View>
                  <Text style={{ fontSize: 18, color: colors.theme }}>
                    {item.comments.commentTitle}
                  </Text>
                  <Text style={{ fontSize: 18, color: colors.theme }}>
                    {item.comments.commentText}
                  </Text>
                </View>
              )}
              <Text style={styles.postDate}>{item.date}</Text>
              <View style={styles.reviewContainer}>
                <Pressable
                  onPress={() => {
                    pawRating(1, item._id);
                  }}
                >
                  <Ionicons name="paw" size={24} color="#264026" />
                </Pressable>
                <Pressable
                  onPress={() => {
                    pawRating(2, item._id);
                  }}
                >
                  <Ionicons name="paw" size={24} color="#264026" />
                </Pressable>
                <Pressable
                  onPress={() => {
                    pawRating(3, item._id);
                  }}
                >
                  <Ionicons name="paw" size={24} color="#264026" />
                </Pressable>
                <Pressable
                  onPress={() => {
                    pawRating(4, item._id);
                  }}
                >
                  <Ionicons name="paw" size={24} color="#264026" />
                </Pressable>
                <Pressable
                  onPress={() => {
                    pawRating(5, item._id);
                  }}
                >
                  <Ionicons name="paw" size={24} color="#264026" />
                </Pressable>
              </View>
            </View>
          </Pressable>
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.openModalButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Add new place</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
}

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
    color: "green",
  },
  reviewContainer: {
    flexDirection: "row",
    columnGap: 5,
  },
});
