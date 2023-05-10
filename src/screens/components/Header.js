import React from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function Header() {

    const openMenu = () => {
        
    }

    return (
        <SafeAreaView style={styles.header}>
            <Ionicons name="menu" size={40} color="black" onPress={openMenu} style={styles.icon}/>                  
        </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        position: 'absolute',
        left: 280,
        top: -18,
    }
  });