import React from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Alert } from "react-native";

export default function Button(props) {
    const { title = 'Sign in' } = props;
    return (
        <SafeAreaView>
        <Pressable style={styles.button} onPress={() => Alert.alert('Fin du är idag :)')}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>            
        </SafeAreaView>

    );
  }
  
  const styles = StyleSheet.create({
    button: {
      width: 300,
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'pink',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });