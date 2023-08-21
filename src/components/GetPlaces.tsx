import React, { createContext, useCallback, useContext } from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IP from "../../fetchIP";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { CustomButton } from "./CustomButton";
import { RefreshControl } from "react-native-gesture-handler";
import { Button, Card } from "@rneui/themed";
import { Places } from "./Types";
import { useFetch } from "./FetchData";
import { CustomCard } from "./CustomCard";
import { AddPlace } from "./AddPlace";
import { ThemeContext } from "../context/ThemeContext";

export const GetPlaces = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;
  const { data, error, loading } = useFetch<Places[]>(IP + "/places");

  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isActive, setActive] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleSavedItems = () => {
    setActive((prevState) => !prevState);
    console.log(isActive);
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

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      backgroundColor: colors.background,
    },
    postContainer: {
      width: "100%",
      backgroundColor: colors.card,
      marginBottom: 20,
      alignSelf: "center",
      padding: 15,
      borderRadius: 10,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    imgAvatar: {
      width: "99%",
      height: 200,
      alignSelf: "center",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        {modalVisible && <AddPlace closeModal={toggleModal} />}
      </KeyboardAvoidingView>
      {/* Sortera på platsen som är närmst */}
      <FlatList
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {isActive ? (
              <AntDesign
                name="pushpino"
                size={24}
                color="black"
                style={{ alignSelf: "flex-end", marginBottom: 10 }}
                onPress={toggleSavedItems}
              />
            ) : (
              <AntDesign
                name="pushpin"
                size={24}
                color="black"
                style={{ alignSelf: "flex-end", marginBottom: 10 }}
                onPress={toggleSavedItems}
              />
            )}
            <Image
              style={styles.imgAvatar}
              source={require("../Images/beach.jpg")}
            />
            <View style={{ marginTop: 10 }}>
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
            {/* <CustomCard>
              <Text style={{ fontSize: 20, color: colors.text }}>
                {item.description}
              </Text>
            </CustomCard> */}
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
