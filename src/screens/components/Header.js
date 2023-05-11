import React from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import StackTwo from "../navigation/AppStack";



export default function Header({ navigation }) {

    const openMenu = () => {

    }

    return (
        <SafeAreaView style={styles.header}>
            <Ionicons name="menu" size={40} color="black" onPress={(openMenu)}/>                  
        </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
  });