import React, { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

//COMPONENTS
import { CustomButton } from "../components/CustomButton";
import { AuthContext, defaultContextState } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
// import { CustomDrawer } from "../navigation/CustomDrawer";

//ICONS
import { Entypo } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

export const HomeScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, setState } = useContext(AuthContext);

  const { colors } = theme;
  const { user } = state;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    viewBox: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.primary,
      padding: 20,
    },
    pinned: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.secondary,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewBox}>
        <View style={styles.pinned}>
          <Text>Pinned</Text>
        </View>
      </View>
      <View style={styles.viewBox}>
        <View style={styles.pinned}>
          <Text>Add stuff</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
