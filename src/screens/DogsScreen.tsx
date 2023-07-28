import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// CONTEXT
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// COMPONENTS
import { AddDog } from "../components/AddDog";
import { CustomButton } from "../components/CustomButton";
import IP from "../../fetchIP";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dogs, useFetch } from "../components/FetchData";

interface Props {
  navigation: any;
}

export const DogsScreen = ({ navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { data, error, loading } = useFetch<Dogs[]>(
    IP + "/dogs/" + user.userID
  );
  const [dogs, setDogs] = useState<Dogs[]>([]);

  // const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [overlayVisable, setOverlayVisable] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const addDog = (dog: Dogs) => {
    setDogs([...dogs, dog]);
  };

  useEffect(() => {
    setDogs(data ?? []);
    console.log(data);
  }, [data]);

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
      backgroundColor: colors.background,
      paddingHorizontal: 10,
    },
    postContainer: {
      width: "100%",
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 15,
      borderRadius: 10,
      backgroundColor: colors.card,
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
        {modalVisible && <AddDog closeModal={toggleModal} addDog={addDog} />}
      </KeyboardAvoidingView>
      <FlatList
        data={dogs}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Dog Details", { dogId: item._id })
            }
          >
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
          </TouchableOpacity>
        )}
      />
      <CustomButton
        title="New dog"
        bgColor="#bced95"
        onPress={() => setModalVisible(true)}
      />
    </SafeAreaView>
  );
};
