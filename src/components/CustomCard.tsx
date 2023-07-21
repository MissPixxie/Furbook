import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

interface Props {
  children: React.ReactNode;
  title?: string;
  onPress?: () => void;
  bgColor?: any;
  color?: string;
  fontSize?: FontSize;
  icon?: any;
  flexDirection?: flexDirection;
}

type FontSize = 18 | 20 | 22 | 26 | 28 | 32;
type flexDirection = "row" | "column";

export const CustomCard = ({
  children,
  title,
  onPress,
  bgColor,
  color,
  fontSize = 22,
  icon,
  flexDirection,
}: Props) => {
  const styles = StyleSheet.create({
    button: {
      width: "80%",
      backgroundColor: bgColor,
      borderRadius: 10,
      marginVertical: 10,
      alignSelf: "center",
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },
    text: {
      fontSize: fontSize,
      color: color,
      paddingHorizontal: 5,
      paddingVertical: 10,
      textAlign: "center",
    },
  });

  return (
    <LinearGradient colors={["#000", "#fff", "#000"]}>
      {children}
    </LinearGradient>
  );
};
