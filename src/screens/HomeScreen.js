import React, {
  useContext,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../../App";

const HomeScreen = ({ navigation }) => {
  //console.log('home screen component rendered');

  const { colors } = useTheme();
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.ButtonContainer}>
          <Pressable
            onPress={() => navigation.navigate("Sign in")}
            style={styles.SigninButton}
          >
            <Text style={styles.ButtonText}>Sign in</Text>
          </Pressable>
        </View>
        <View style={styles.ButtonContainer}>
          <Pressable
            onPress={() => navigation.navigate("Sign up")}
            style={styles.SignupButton}
          >
            <Text style={[styles.ButtonText, styles.ButtonTextSignup]}>
              Register
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Places")}
            style={styles.SignupButton}
          >
            <Text style={[styles.ButtonText, styles.ButtonTextSignup]}>
              Places
            </Text>
          </Pressable>
          <Pressable onPress={toggleTheme} style={styles.SignupButton}>
            <Text style={[styles.ButtonText, styles.ButtonTextSignup]}>
              Theme
            </Text>
          </Pressable>
        </View>
        {/* <Switch
                            trackColor={ newTheme === 'light' ? '#767577' : '#81ff83'}
                            thumbColor={newTheme === 'light' ? '#f4f3f4' : '#184718'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleTheme}
                            value={newTheme === 'light'}
                        /> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  SigninButton: {
    width: "100%",
    backgroundColor: "#184d4d",
    padding: 13,
    borderRadius: 5,
  },
  SignupButton: {
    width: "100%",
    padding: 13,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#184d4d",
    marginTop: 15,
  },
  ButtonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 55,
    paddingVertical: 1,
    color: "white",
  },
  ButtonTextSignup: {
    color: "#184d4d",
  },
});
