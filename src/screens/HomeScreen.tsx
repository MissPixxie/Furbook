import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { CustomButton } from "../components/CustomButton";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
  navigation: any;
}

export const HomeScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, setState } = useContext(AuthContext);

  const { colors } = theme;

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
      <Text style={{ color: colors.text }}>{state.user}</Text>
      <CustomButton
        title="Theme"
        onPress={toggleTheme}
        bgColor={colors.secondary}
      />
      <CustomButton
        title="Logout"
        onPress={() => setState({ user: "", isLoggedIn: false })}
        bgColor={colors.secondary}
      />
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
