import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
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
import { Users, Dogs, Events, Places, Messages } from "../components/Types";
import { useFetch } from "../components/FetchData";

interface Props {
  navigation: any;
  route: any;
}

export const DogsScreen = ({ route, navigation }: Props) => {
  console.log("Dogsscreen rendered");

  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const [updateFromDetailScreen, setUpdateFromDetailScreen] = useState(false);

  // const { data, error, loading } = useFetch<Dogs[]>(
  //   IP + "/dogs/" + user.userID
  // );
  const [data, setData] = useState<any>();

  //const [dogs, setDogs] = useState<Dogs[]>([]);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const updateWhenDogRemoved = (actionType: string, newState: boolean) => {
    if (actionType === "updated") {
      setUpdateFromDetailScreen(newState);
      getData();
    } else {
      console.log("something went wrong");
    }
  };

  // const addDog = (dog: Dogs) => {
  //   setDogs([...dogs, dog]);
  // };

  // useEffect(() => {
  //   setDogs(data || []);
  // }, [data]);

  useEffect(() => {
    getData();
    console.log("useEffect in Dogsscreen rendered");
  }, []);

  async function getData() {
    try {
      const response = await fetch(IP + "/dogs/" + user.userID);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [data]);

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
        {modalVisible && (
          <AddDog
            closeModal={toggleModal}
            //addDog={addDog}
            updateFunction={getData}
          />
        )}
      </KeyboardAvoidingView>
      <FlatList
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Dog Details", {
                id: item._id,
                name: item.name,
                age: item.age,
                sex: item.sex,
                breed: item.breed,
                neutered: item.neutered,
                updateWhenDogRemoved,
              })
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
