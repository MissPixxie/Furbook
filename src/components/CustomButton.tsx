import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: any;
  bgColor: any;
  borderColor?: string;
  color?: string;
  borderWidth?: number;
}

const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  bgColor,
  borderColor,
  color,
  borderWidth,
}) => {
  const styles = StyleSheet.create({
    button: {
      width: "80%",
      backgroundColor: bgColor,
      borderWidth: borderWidth,
      borderRadius: 10,
      marginVertical: 10,
      alignSelf: "center",
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
      borderColor: borderColor,
    },
    text: {
      fontSize: 26,
      color: color,
      paddingHorizontal: 5,
      paddingVertical: 10,
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
