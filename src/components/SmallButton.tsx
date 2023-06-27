import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";


interface Props {
  title: string;
  active: boolean;
  icon: any;
  onPress: any;
}

const SmallButton: React.FC<Props> = ({ title, active, icon, onPress }) => {
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

export default SmallButton;

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
    fontSize: 20,
  },
});
