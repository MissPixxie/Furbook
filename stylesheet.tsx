import { StyleSheet } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { useContext } from "react";

const { theme, toggleTheme } = useContext(ThemeContext);
const { colors } = theme;

export const BasicStyles = StyleSheet.create({
  postContainer: {
    width: "100%",
    backgroundColor: colors.card,
    marginBottom: 20,
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#080808",
    shadowOffset: { width: -5, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 4,
  },
  text: {
    color: colors.text,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
  inputs: {
    backgroundColor: colors.inputs,
    flexDirection: "row",
    width: 300,
    height: 50,
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
});
