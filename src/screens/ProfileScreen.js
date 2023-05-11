import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Button, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StackTwo from "./navigation/AppStack";
import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen({navigation}) {

    return (
      <SafeAreaView style={styles.container}>
          <Text>
          <TouchableOpacity onPress={ () => navigation.openDrawer()}>
          <Text>Profile</Text>
          </TouchableOpacity>
          </Text>     
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