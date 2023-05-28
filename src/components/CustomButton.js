import React from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Alert, TouchableOpacity } from "react-native";

export default function CustomButton(props) {

    return (
       <TouchableOpacity style={styles.button} onPress={ () => {

       }}>
        <Text style={styles.text}>Klicka här</Text>
       </TouchableOpacity>
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