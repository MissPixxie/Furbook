import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import { GetPlaces } from "../components/GetPlaces";
import { AddPlace } from "../components/AddPlace";

import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { RefreshControl } from "react-native-gesture-handler";

interface Props {
  navigation: any;
}

export const NotificationScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [modalVisible, setModalVisible] = useState(false);
  const text = "Hello, my container is blurring contents underneath!";

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text>{text}</Text>
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
