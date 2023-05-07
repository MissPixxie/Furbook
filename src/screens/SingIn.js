import React from "react";
import { View, Text, StyleSheet, Alert, SafeAreaView } from "react-native";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

export default function SignIn() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Input />
            <Buttons />
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });