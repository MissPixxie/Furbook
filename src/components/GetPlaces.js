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
import IP from "../../fetchIP";

import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

export default function Places({ setModalVisible }) {
  //console.log('getplaces component rendered');

  const [isVisable, setIsVisable] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect rendered");
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

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.name}</Text>
            <Text style={styles.postText}>{item.location}</Text>
            <Text style={styles.postText}>{item.category}</Text>
            <Text style={styles.postText}>{item.description}</Text>
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
                <Text style={styles.metaComments}>
                  {item.comments.commentTitle}
                </Text>
                <Text style={styles.metaComments}>
                  {item.comments.commentText}
                </Text>
              </View>
            )}
            <Text style={styles.postDate}>{item.date}</Text>
            <View style={styles.reviewContainer}>
              <Pressable
                onPress={() => {
                  Alert.alert("Paw pressed");
                }}
              >
                <Ionicons name="paw" size={24} color="#264026" />
              </Pressable>
              <Pressable
                onPress={() => {
                  Alert.alert("Paw pressed");
                }}
              >
                <Ionicons name="paw" size={24} color="#264026" />
              </Pressable>
              <Pressable
                onPress={() => {
                  Alert.alert("Paw pressed");
                }}
              >
                <Ionicons name="paw" size={24} color="#264026" />
              </Pressable>
              <Pressable
                onPress={() => {
                  Alert.alert("Paw pressed");
                }}
              >
                <Ionicons name="paw" size={24} color="#264026" />
              </Pressable>
              <Pressable
                onPress={() => {
                  Alert.alert("Paw pressed");
                }}
              >
                <Ionicons name="paw" size={24} color="#264026" />
              </Pressable>
            </View>
          </View>
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
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => {}}>
            <Text>{item.name}</Text>
          </Pressable>
        )}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    backgroundColor: "white",
    width: "90%",
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
  openModalButton: {
    width: "80%",
    backgroundColor: "#264026",
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 26,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
  postTitle: {
    fontSize: 24,
  },
  postText: {
    marginVertical: 15,
    fontSize: 22,
  },
  postComments: {
    marginVertical: 5,
    fontSize: 18,
    color: "green",
  },
  metaComments: {
    fontSize: 18,
  },
  reviewContainer: {
    flexDirection: "row",
    columnGap: 5,
  },
});
