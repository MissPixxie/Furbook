import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

export default function ProfileScreen({ navigation }: Props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
      </Pressable>
      <Text>Profile</Text>
      <CustomButton title="Theme" onPress={toggleTheme} bgColor="#000" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
