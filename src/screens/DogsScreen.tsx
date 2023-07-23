import React, { useCallback, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
  Modal,
  FlatList,
  RefreshControl,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { AddDog } from "../components/AddDog";
import { CustomButton } from "../components/CustomButton";
import { BasicStyles } from "../../stylesheet";
import { Dogs, useFetch } from "../components/FetchData";
import IP from "../../fetchIP";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
  navigation: any;
}

export const DogsScreen = ({ navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const { data, error, loading } = useFetch<Dogs[]>(IP + "/dogs");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [overlayVisable, setOverlayVisable] = useState(false);
  const { colors } = theme;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleOverlay = () => {
    setOverlayVisable(!overlayVisable);
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#202020",
    },
    postContainer: {
      width: "100%",
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#080808",
      shadowOffset: { width: -5, height: 4 },
      shadowOpacity: 0.9,
      shadowRadius: 3,
      elevation: 4,
    },
    imgAvatar: {
      width: 100,
      height: 100,
      borderRadius: 400 / 2,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        {modalVisible && <AddDog closeModal={toggleModal} />}
      </KeyboardAvoidingView>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image
              style={styles.imgAvatar}
              source={require("../Images/OGBUB40.jpg")}
            />
            <View style={{ marginLeft: 15, alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 26, color: colors.text }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 18, color: colors.text }}>
                {item.sex}
              </Text>
              <Text style={{ fontSize: 18, color: colors.text }}>
                {item.breed}
              </Text>
              <Text style={{ fontSize: 18, color: colors.text }}>
                {item.neutered}
              </Text>
              {/* <Text style={{ fontSize: 18, color: colors.text }}>
              Owner Id: {item.owner}
            </Text> */}
            </View>
            <Text
              style={{
                fontSize: 20,
                color: colors.text,
                flexGrow: 2,
                textAlign: "right",
                marginRight: 10,
              }}
            >
              {item.age}
            </Text>
          </View>
        )}
      />
      <Text>Dogs</Text>

      <CustomButton
        title="New dog"
        bgColor="#bced95"
        onPress={() => setModalVisible(true)}
      />
    </SafeAreaView>
  );
};
