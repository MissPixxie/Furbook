import { StyleSheet } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";

const { theme, toggleTheme } = useContext(ThemeContext);
const { colors } = theme;

export const styles = StyleSheet.create({
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
    fontSize: fontSize,
    color: color,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
});
