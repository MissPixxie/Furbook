import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, SafeAreaView, TextInput, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function SettingsScreen({navigation}) {

    return (
      <SafeAreaView style={styles.container}>
          <Text>Profil</Text>        
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