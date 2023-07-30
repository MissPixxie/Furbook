import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Carousel from "react-native-snap-carousel";

import { GetPlaces } from "../components/GetPlaces";
import { AddPlace } from "../components/AddPlace";

import {
  Ionicons,
  Foundation,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

import { ThemeContext } from "../context/ThemeContext";
import { RefreshControl } from "react-native-gesture-handler";
import { useFetch } from "../components/FetchData";
import IP from "../../fetchIP";
import { Dogs } from "../components/FetchData";

interface Props {
  navigation: any;
}

export const NotificationScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data, error, loading } = useFetch<Dogs[]>(IP + "/dogs");

  console.log(data);

  return (
    <View style={styles.container}>
      {data?.map((event) => (
        <Text key={event._id}>{event.breed}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
