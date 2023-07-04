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

  const { colors } = theme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>Profile</Text>
      <CustomButton
        title="Theme"
        onPress={toggleTheme}
        bgColor={colors.secondary}
      />
    </SafeAreaView>
  );
}
