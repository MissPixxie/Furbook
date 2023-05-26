import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = ({ navigation }) => {

    return (
        <LinearGradient colors={['#bdbdbd', '#fff', '#bdbdbd']} style={styles.container}>
            <SafeAreaView>
                <View style={styles.ButtonContainer}>
                    <Pressable onPress={() => navigation.navigate('Sign in')} style={styles.SigninButton}>
                            <Text style={styles.ButtonText}>Sign in</Text>
                    </Pressable>                     
                </View>
               <View style={styles.ButtonContainer}>
                    <Pressable onPress={() => navigation.navigate('Sign up')} style={styles.SignupButton}>
                            <Text style={[styles.ButtonText, styles.ButtonTextSignup]}>Register</Text>
                    </Pressable>                  
               </View>
            </SafeAreaView>            
        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    SigninButton: {
        width: "100%",
        backgroundColor: "#184d4d",
        padding: 13,
        borderRadius: 5,
    },
    SignupButton: {
        width: "100%",
        padding: 13,
        borderRadius: 5,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#184d4d",
        marginTop: 15,
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 55,
        paddingVertical: 1,
        color: 'white',
    },
    ButtonTextSignup: {
        color: '#184d4d',
    }
  });