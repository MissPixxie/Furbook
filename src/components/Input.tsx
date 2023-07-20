import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  borderColor?: string;
  color?: string;
  borderWidth?: number;
  fontSize?: FontSize;
  icon?: any;
}

type FontSize = 18 | 20 | 22 | 26 | 28 | 32;

export const Input = ({
  title,
  onPress,
  borderColor,
  color,
  borderWidth,
  fontSize = 22,
  icon,
}: Props) => {
  const [state, setState] = useState();

  const styles = StyleSheet.create({
    input: {
      flexDirection: "row",
      width: 300,
      height: 50,
      margin: 10,
      padding: 10,
      backgroundColor: "white",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#262626",
    },
    inputText: {
      marginLeft: 13,
      fontSize: 18,
      borderBottomColor: "black",
    },
  });

  return (
    <View style={styles.input}>
      <TextInput
        // onChangeText={setState}
        value={state}
        placeholder="Name"
        style={styles.inputText}
      />
    </View>
  );
};
