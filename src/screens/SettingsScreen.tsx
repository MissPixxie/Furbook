import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
  navigation: any;
}

export const SettingsScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>Settings</Text>
      {/* <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
      </Pressable> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
