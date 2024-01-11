import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

//COMPONENTS
import { CustomButton } from "../components/CustomButton";
import { AuthContext, defaultContextState } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
// import { CustomDrawer } from "../navigation/CustomDrawer";
import { fetchSavedEvents } from "../API/fetchSavedEvents";

//ICONS
import { Entypo } from "@expo/vector-icons";
import { useFetch } from "../components/FetchData";
import IP from "../../fetchIP";
import { NavigationProp } from "@react-navigation/native";
import { Users, Dogs, Events, Places, Messages } from "../components/Types";
import { EventItem } from "../components/EventItem";
import { CustomCard } from "../components/CustomCard";
import { useSaveEvent } from "../API/useSaveEvent";
import { Image } from "expo-image";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export const HomeScreen = ({ navigation }: RouterProps) => {
  console.log("Homescreen rendered");

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, setState } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<Users[]>([]);
  const [image, setImage] = useState<string | null>(null);

  const { events } = fetchSavedEvents();

  const { colors } = theme;
  const { user } = state;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [data]);

  console.log(fetchSavedEvents);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    viewBox: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.primary,
      padding: 20,
    },
    pinned: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.secondary,
    },
    addStuff: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.secondary,
      borderRadius: 15,
    },
  });

  const itemFromList = ({ item }: { item: Events }) => {
    return (
      <>
        <CustomCard>
          <EventItem item={item} />
        </CustomCard>
      </>
    );
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // const takeImageFromCamera = () => {
    //   ImagePicker.launchCameraAsync();
    // };

    if (!result.canceled) {
      console.log(result);
      if (result.assets[0].uri != null) {
        setImage(`${result.assets[0].uri}`);
        console.log(result.assets[0].uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 100, width: 300, backgroundColor: "blue" }}>
        <Text>Some text</Text>
      </View>
      <View style={{ height: 100, width: 300, backgroundColor: "pink" }}>
        <Text>Some other text</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      {/* <CustomCard color="white">
        <Text>Hej</Text>
        <Text>lgkjglkdfjglkdflgdfjkg</Text>
      </CustomCard>
      <FlatList
        data={user.userSavedEvents}
        renderItem={itemFromList}
        keyExtractor={(item) => item._id.toString()}
      /> */}
    </SafeAreaView>
  );
};
