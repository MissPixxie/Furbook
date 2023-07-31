import React from "react";
import { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import IP from "../../fetchIP";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface Props {
  navigation: any;
}

export const SignInScreen = ({ navigation }: Props) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const { state, setState } = useContext(AuthContext);
  const { userID, userName, userEmail } = state.user;

  async function signIn() {
    try {
      const response = await fetch(IP + "/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          const { message, user } = data;
          if (message === "User exists") {
            setState({
              user: {
                userID: user.ID,
                userName: user.name,
                userEmail: user.email,
              },
              isLoggedIn: true,
            });
          } else {
            return "Log in";
          }
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  return (
    <LinearGradient
      colors={["#093129", "#69DEDE", "#093129"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.input}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            onChangeText={setMail}
            defaultValue={email}
            placeholder="Email"
            placeholderTextColor={"#636363"}
            style={styles.inputText}
          />
        </View>
        <View style={styles.input}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <TextInput
            secureTextEntry={true}
            onChangeText={setPassword}
            defaultValue={password}
            placeholder="Password"
            placeholderTextColor={"#636363"}
            style={styles.inputText}
          />
        </View>

        <Pressable onPress={signIn}>
          <Text style={styles.SignInButton}>Sign in</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Sign up")}>
          <Text style={styles.SignUpButton}>Register</Text>
        </Pressable>

        <Pressable onPress={() => Alert.alert("Glömt lösenord")}>
          <Text style={styles.forgotPasswordButton}>Forgot password?</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    width: 300,
    height: 50,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
  },
  inputText: {
    marginLeft: 13,
    fontSize: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginBottom: 50,
  },
  forgotPasswordButton: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: 50,
  },
  SignInButton: {
    backgroundColor: "#0a2121",
    width: 300,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#0a2121",
  },
  SignUpButton: {
    backgroundColor: "white",
    width: 300,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#123b3b",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "pink",
  },
});
