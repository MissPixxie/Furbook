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
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

// CONTEXT
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// COMPONENTS
import { AddDog } from "../components/AddDog";
import { CustomButton } from "../components/CustomButton";
import IP from "../../fetchIP";

interface Props {
  navigation: any;
  route: any;
}

export const DogsDetailsScreen = ({ route, navigation }: Props) => {
  console.log("DogDetailsscreen rendered");

  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  //const { dog } = route.params;
  //console.log(event.data.state);
  const { id, name, age, sex, breed, neutered } = route.params;
  const updateWhenDogRemoved = route.params.updateWhenDogRemoved;

  const updateDogScreen = () => {
    updateWhenDogRemoved("updated");
    navigation.navigate({
      name: "Dogs",
      actionType: "updated",
      newData: true,
    });
  };

  const [data, setData] = useState();

  async function deleteDog() {
    try {
      const response = await fetch(`${IP}/dogs/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      if (data.deleted === true) {
        Alert.alert("dog deleted");
        updateDogScreen();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 10,
    },
    imgAvatar: {
      width: 100,
      height: 100,
      borderRadius: 400 / 2,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imgAvatar}
        source={require("../Images/OGBUB40.jpg")}
      />
      <View>
        <Text style={{ color: colors.text }}>{name}</Text>
        <Text style={{ color: colors.text }}>{age}</Text>
        <Text style={{ color: colors.text }}>{sex}</Text>
        <Text style={{ color: colors.text }}>{breed}</Text>
        <Text style={{ color: colors.text }}>{neutered}</Text>
      </View>
      <CustomButton title="Remove dog" bgColor="#ee4444" onPress={deleteDog} />
    </SafeAreaView>
  );
};
