import React, { useContext, useState } from "react";
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
import { AuthContext } from "../context/AuthContext";
import ProfileScreen from "./ProfileScreen";
import SignInScreen from "./SignInScreen";

interface Props {
  navigation: any;
}

const HomeScreen = ({ navigation }: Props) => {
  //console.log('home screen component rendered');

  const { colors } = useTheme();
  const { isLoggedIn, fixedContext } = useContext(AuthContext);

  const checkUser = async () => {
    console.log();
  };

  if (!isLoggedIn) {
    return <SignInScreen navigation={navigation} />;
  }
  return <ProfileScreen navigation={navigation} />;
  {
    /* <Pressable onPress={toggleTheme} style={styles.SignupButton}>
            <Text style={[styles.ButtonText, styles.ButtonTextSignup]}>
              Theme
            </Text>
          </Pressable> */
  }
  {
    /* <Switch
                            trackColor={ newTheme === 'light' ? '#767577' : '#81ff83'}
                            thumbColor={newTheme === 'light' ? '#f4f3f4' : '#184718'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleTheme}
                            value={newTheme === 'light'}
                        /> */
  }
};

export default HomeScreen;
