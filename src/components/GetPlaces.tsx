import React, { createContext } from "react";
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
import { Ionicons } from "@expo/vector-icons";

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

const GetPlaces: React.FC<Props> = ({ setModalVisible, theme }) => {
  const thisTheme = theme.dark;

  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [data, setData] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
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
        console.log(error.message);
      }
    }
  }

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
              <Text>{item.date.toString()}</Text>
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
};

export default GetPlaces;

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
