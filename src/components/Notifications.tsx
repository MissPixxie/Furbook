import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Overlay } from "@rneui/themed";

import { ThemeContext } from "../context/ThemeContext";
import { RefreshControl } from "react-native-gesture-handler";

export const Notification = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;

  const [modalVisible, setModalVisible] = useState(false);
  const text = "Hello, my container is blurring contents underneath!";

  return (
    <View style={styles.container}>
      <Overlay
        isVisible={true}
        backdropStyle={{ backgroundColor: "black", opacity: 0.7 }}
        overlayStyle={{
          borderRadius: 10,
          backgroundColor: colors.background,
        }}
      >
        <Text>{text}</Text>
        <Text>{text}</Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
