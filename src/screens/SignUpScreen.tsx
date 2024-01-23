import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import IP from "../../fetchIP";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Users, Dogs, Events, Places, Messages } from "../components/Types";
import { Image } from "expo-image";

interface Props {
  navigation: any;
}

export const SignUpScreen = ({ navigation }: Props) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [matchpassword, setMatchPassword] = useState("");

  async function signUp() {
    try {
      const response = await fetch(IP + "/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          country: country,
          city: city,
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
    <ImageBackground
      source={require("../Images/alvan-nee-1VgfQdCuX-4-unsplash.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.inputContainer}>
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
            autoComplete="email"
            style={styles.inputText}
          />
        </View>
        <View style={styles.Input}>
          <TextInput
            onChangeText={setCountry}
            value={country}
            placeholder="Country"
            placeholderTextColor={"#636363"}
            style={styles.inputText}
          />
        </View>
        <View style={styles.Input}>
          <TextInput
            onChangeText={setCity}
            value={city}
            placeholder="City"
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
      <View style={{ width: "80%" }}>
        <TouchableOpacity onPress={signUp} style={styles.signUpButton}>
          <LinearGradient
            colors={["#BBE29D", "#D3EFBE", "#BBE29D"]}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 5,
              elevation: 3,
            }}
          >
            <Text style={styles.signUpButtonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    shadowColor: "#080808",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
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
  signUpButton: {
    width: "100%",
    shadowColor: "#080808",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  signUpButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    textAlign: "center",
  },
});
