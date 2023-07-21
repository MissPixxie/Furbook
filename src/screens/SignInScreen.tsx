import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "../../.firebase";
import { AuthContext } from "../context/AuthContext";

interface Props {
  navigation: any;
}

export const SignInScreen = ({ navigation }: Props) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, setState } = useContext(AuthContext);
  const { userID, userName, userEmail } = state.user;
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(response);
        const user = userCredentials.user;
      })
      .then(() => setLoading(false))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        Alert.alert("User not found");
      });
  };

  // async function signIn() {
  //   try {
  //     const response = await fetch(IP + "/signin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         const { message, user } = data;
  //         if (message === "User exists") {
  //           setState({
  //             user: {
  //               userID: user.ID,
  //               userName: user.name,
  //               userEmail: user.email,
  //             },
  //             isLoggedIn: true,
  //           });
  //         } else {
  //           return "Log in";
  //         }
  //       });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log(error);
  //     }
  //   }
  // }

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
            placeholder="Email"
            value={email}
            onChangeText={(text) => setMail(text)}
            placeholderTextColor={"#636363"}
            style={styles.inputText}
          />
        </View>
        <View style={styles.input}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
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
