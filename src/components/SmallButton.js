import React, { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function SmallButton({ title, active, icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={active ? [styles.baseButton, styles.active] : styles.baseButton}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <Text style={{ marginLeft: 10 }}>{icon}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    backgroundColor: "#a4a4a4",
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
    marginVertical: 10,
  },
  active: {
    backgroundColor: "#bced95",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
