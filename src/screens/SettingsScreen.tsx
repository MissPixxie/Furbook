import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

export default function SettingsScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
      </Pressable>
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
