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

// CONTEXT
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// COMPONENTS
import { AddDog } from "../components/AddDog";
import { CustomButton } from "../components/CustomButton";
import IP from "../../fetchIP";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: any;
  route: any;
}

export const DogsDetailsScreen = ({ route, navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const { dog } = route.params;
  //const { id, name, age, sex, breed, neutered } = route.params;
  console.log(dog);

  const [data, setData] = useState();

  async function deleteDog() {
    try {
      const response = await fetch(`${IP}/dogs/${dog._id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setData(data);
          Alert.alert("dog deleted");
          navigation.navigate({
            name: "Dogs",
            params: { deleted: true },
            merge: true,
          });
        });
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
      <FlatList
        data={dog}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
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
        )}
      />
      <CustomButton title="Remove dog" bgColor="#ee4444" onPress={deleteDog} />
    </SafeAreaView>
  );
};
