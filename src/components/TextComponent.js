import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function TextComponent({ text }) {

  const styles = StyleSheet.create({
    baseText: {
      color: "white",
    },
  });

  const type = {
    title: {
      fontSize: 22,
    },
    basicText: {
      fontSize: 18,
    }
  }

  return <Text>{text}</Text>;
}
