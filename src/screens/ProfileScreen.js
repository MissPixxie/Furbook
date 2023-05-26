import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, Button, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StackTwo from "./navigation/AppStack";
import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen({navigation}) {

    return (
      <SafeAreaView style={styles.container}>
            <Pressable onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={24} color="black" />
            </Pressable>
            <Text>Profile</Text>         
      </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });