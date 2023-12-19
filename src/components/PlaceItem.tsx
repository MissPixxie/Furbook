import React, { Children, createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Button,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";
import { useFetch } from "./FetchData";
import { Places } from "./Types";

import IP from "../../fetchIP";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

interface ItemProps {
  item: Places;
}

export const PlaceItem = ({ item }: ItemProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state } = useContext(AuthContext);
  const thisTheme = theme.dark;
  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggleSavedItems = () => {
    setActive((prevState) => !prevState);
    if (isActive) {
      const savedPlaces = state.user.userSavedPlaces;
      // push event to array
      savedPlaces.push(item);
      console.log(savedPlaces);
    }
    console.log(isActive);
  };

  const styles = StyleSheet.create({
    postContainer: {
      width: "100%",
      marginBottom: 20,
      backgroundColor: colors.card,
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
    item: {
      flexDirection: "row",
      paddingVertical: 8,
    },
  });

  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={styles.postContainer}>
        {isActive ? (
          <AntDesign
            name="pushpin"
            size={24}
            color="black"
            style={{ alignSelf: "flex-end" }}
            onPress={toggleSavedItems}
          />
        ) : (
          <AntDesign
            name="pushpino"
            size={24}
            color="black"
            style={{ alignSelf: "flex-end" }}
            onPress={toggleSavedItems}
          />
        )}
        <Image
          style={styles.imgAvatar}
          source={require("../Images/beach.jpg")}
        />
        <Text style={{ fontSize: 26, color: colors.text }}>{item.name}</Text>
        <Text style={{ fontSize: 20, color: colors.text }}>
          {item.category}
        </Text>
        <Text style={{ fontSize: 20, color: colors.text }}>
          {item.location}
        </Text>
        <Text style={{ fontSize: 20, color: colors.text }}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};
