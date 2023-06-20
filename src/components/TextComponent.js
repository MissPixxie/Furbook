import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function TextComponent({ title }) {
  return <Text style={styles.baseText}>{title}</Text>;
}

const styles = StyleSheet.create({
  baseText: {
    color: "white",
  },
});
