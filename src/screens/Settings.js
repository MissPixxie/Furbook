import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, SafeAreaView, TextInput, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Settings({navigation}) {

    return (
            <LinearGradient
              colors={['#093129', '#69DEDE', '#093129']}
              style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <Text>Settings</Text>              
                </SafeAreaView>       
            </LinearGradient>     
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });