import React, { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

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
  });

  return (
    <SafeAreaView style={styles.container}>
      <Entypo
        name="menu"
        size={24}
        color="black"
        onPress={() => navigation.toggleDrawer()}
      />
      <Text style={{ color: colors.text }}>{user.userName}</Text>
      <Text style={{ color: colors.text }}>{user.userEmail}</Text>
    </SafeAreaView>
  );
  /* <Switch
                            trackColor={ newTheme === 'light' ? '#767577' : '#81ff83'}
                            thumbColor={newTheme === 'light' ? '#f4f3f4' : '#184718'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleTheme}
                            value={newTheme === 'light'}
                        /> */
};
