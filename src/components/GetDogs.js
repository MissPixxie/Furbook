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

export default function GetDogs({ theme }) {
  //console.log('getplaces component rendered');

  const thisTheme = theme.dark;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect rendered");
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(IP + "/dogs");
      const data = await response.json();
      setData(data);
      setLoading(false);
      const test = JSON.stringify(data);
      console.log(test);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.name}</Text>
            <Text style={styles.postText}>{item.age}</Text>
            <Text style={styles.postText}>{item.sex}</Text>
            <Text style={styles.postText}>{item.breed}</Text>
            <Text style={styles.postText}>{item.neutered}</Text>
          </View>
        )}
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
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postTitle: {
    fontSize: 24,
  },
  postText: {
    marginVertical: 15,
    fontSize: 22,
  },
});
