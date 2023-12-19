import React, { useContext, useRef, useState } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

interface Props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;

export const MessagesScreen = ({ navigation }: Props) => {
  const styles = StyleSheet.create({});

  return <Text>MessageScreen</Text>;
};
