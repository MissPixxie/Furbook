import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IP from "../../fetchIP";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

interface User {
  name: string;
  email: string;
  password: string;
}

export const SignUpScreen = ({ navigation }: Props) => {

  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [matchpassword, setMatchPassword] = useState("");

  async function signUp() {
    try {
      const response = await fetch(IP + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          Alert.alert(data.message);
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  function checkPasswordMatch() {
    if (password === matchpassword) {
      signUp();
    } else {
      Alert.alert("Password do not match");
    }
  }

  // Check valid number ?
  // Check email validation
  // Check password security

  return (
    <LinearGradient
      colors={["#093129", "#69DEDE", "#093129"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.inputs}>
          <View style={styles.Input}>
            <Ionicons name="person" size={24} color="black" />
            <TextInput
              onChangeText={setName}
              value={name}
              placeholder="Full name"
              placeholderTextColor={"#636363"}
              style={styles.inputText}
            />
          </View>
          <View style={styles.Input}>
            <Entypo name="mail" size={24} color="black" />
            <TextInput
              onChangeText={setMail}
              value={email}
              placeholder="Email"
              placeholderTextColor={"#636363"}
              style={styles.inputText}
            />
          </View>

          <View style={styles.Input}>
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <TextInput
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"#636363"}
              style={styles.inputText}
            />
          </View>

          <View style={styles.Input}>
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <TextInput
              onChangeText={setMatchPassword}
              value={matchpassword}
              secureTextEntry={true}
              placeholder="Repeat password"
              placeholderTextColor={"#636363"}
              style={styles.inputText}
            />
          </View>
        </View>

        <Pressable onPress={checkPasswordMatch}>
          <Text style={styles.SignInButton}>Register</Text>
        </Pressable>
        <Text style={styles.text}>Already have an account?</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.SigninText}>Sign in</Text>
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
  inputs: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  Input: {
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
    backgroundColor: "white",
    borderBottomColor: "black",
  },
  text: {
    fontSize: 18,
    marginTop: 10,
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
  SigninText: {
    fontSize: 18,
    color: "white",
  },
});
