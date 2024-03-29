import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

interface Props {
  title: string;
  active?: boolean;
  icon?: any;
  bgColor?: string;
  align?: AlignSelf;
  margin?: Margin;
  onPress?: () => void;
}

type AlignSelf = "stretch" | "center" | "flex-start" | "flex-end";

type Margin = 5 | 10 | 15 | 20 | 30;

export const SmallButton = ({
  title,
  active,
  icon,
  bgColor,
  align,
  margin,
  onPress,
}: Props) => {
  const styles = StyleSheet.create({
    baseButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "30%",
      backgroundColor: bgColor,
      alignSelf: align,
      borderRadius: 10,
      padding: 5,
      marginRight: margin,
      textAlign: "center",
      marginVertical: 5,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },
    active: {
      backgroundColor: "#bced95",
    },
    buttonText: {
      fontSize: 20,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={active ? [styles.baseButton, styles.active] : styles.baseButton}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <Text style={{ marginLeft: 10 }}>{icon}</Text>
    </Pressable>
  );
};
