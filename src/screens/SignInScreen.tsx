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
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import IP from "../../fetchIP";
import { Ionicons } from "@expo/vector-icons"; //import { AuthContext } from "../context/AuthContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SvgComponent from "../Images/SvgComponent";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: any;
}

//const imageBackground = {require("../Images/alvan-nee-1VgfQdCuX-4-unsplash.jpg")};

export const SignInScreen = ({ navigation }: Props) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const { state, setState } = useContext(AuthContext);
  const { userID, userName, userEmail } = state.user;

  // async function signIn() {
  //   try {
  //     const response = await fetch(IP + "/sign-in", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: "test@hotmail.se",
  //         password: "1234",
  //       }),
  //     });
  //     return await response.json();
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log("error" + error);
  //     }
  //   }
  // }
  async function signIn() {
    try {
      console.log("Hello");
      const response = await fetch(IP + "/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@hotmail.se",
          password: password,
        }),
      });
      const data = await response.json();
      //const { message, user } = data;
      // if (message === "User exists") {
      setState({
        user: {
          userImg: data.userImg,
          userID: data._id,
          userName: data.name,
          userEmail: data.email,
          userPwd: data.password,
          userCountry: data.country,
          userCity: data.city,
          userDogs: data.dogs,
          userSavedPlaces: data.savedPlaces,
          userSavedEvents: data.savedEvents,
          userMessages: data.messages,
        },
        isLoggedIn: true,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log("error" + error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../Images/alvan-nee-1VgfQdCuX-4-unsplash.jpg")}
          contentFit={"cover"}
          style={{ height: "100%", zIndex: -1 }}
        />
      </View>
      {/* <SvgComponent /> */}
      <View style={styles.inputContainer}>
        {/* <Svg
          width={395.342}
          height={569.611}
          style={{ position: "absolute", top: -55, zIndex: 1 }}
        >
          <G fill="#fff">
            <Path d="M390.279 98.592s3.807-37.773 3.074-65.075c-.178-6.63-.638-13.36-.009-19.154.365-3.329 3.122-7.123-.003-7.514-11.03-1.388-22.874 18.685-52.528 26.692S239.991 54.569 151.025 53.627 17.312 43.157 1.279 48.947c.593 28.947.023 79.16.023 79.16" />
            <Path d="M2.342 80.611h393v489h-393z" />
          </G> */}
        {/* <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <View style={styles.input}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            onChangeText={setMail}
            defaultValue={"test@hotmail.se"}
            placeholder="Email"
            placeholderTextColor={"#636363"}
            style={styles.inputText}
            autoComplete="email"
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
        <View style={{ width: "100%" }}>
          <TouchableOpacity onPress={signIn} style={styles.SignInButton}>
            <LinearGradient
              colors={["#BBE29D", "#D3EFBE", "#BBE29D"]}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 5,
                elevation: 3,
              }}
            >
              <Text style={styles.signInButtonText}>Sign in</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Pressable onPress={() => Alert.alert("Glömt lösenord")}>
            <Text style={styles.forgotPasswordButton}>Forgot password?</Text>
          </Pressable>
          <View style={styles.SignUpButton}>
            <Text>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate("Sign up")}>
              <Text
                style={{
                  color: "#597D3E",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
        {/* </Svg> */}
      </View>
    </View>
    //   <SafeAreaView>
    //  </SafeAreaView>
    //</ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    zIndex: -1,
  },
  inputContainer: {
    flex: 2,
    zIndex: 1,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  input: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D0ECBB",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    width: "100%",
  },
  inputText: {
    marginLeft: 13,
    fontSize: 18,
  },
  forgotPasswordButton: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#597D3E",
    marginTop: 15,
    textAlign: "center",
  },
  SignInButton: {
    width: "100%",
    shadowColor: "#080808",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  signInButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    textAlign: "center",
  },
  SignUpButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    marginTop: 15,
  },
});
