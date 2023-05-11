import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = ({ navigation }) => {

    return (
        <LinearGradient colors={['#bdbdbd', '#fff', '#bdbdbd']} style={styles.container}>
            <SafeAreaView>
            <Text>Home</Text>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => navigation.navigate('Sign in')}>
                    <LinearGradient colors={['#7aff85', '#a8ffaf', '#a8ffaf', '#7aff85']} style={styles.SigninButton}>
                        <Text style={styles.ButtonText}>Sign in</Text>
                    </LinearGradient>
                </Pressable>                
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate('Sign up')}>
                    <LinearGradient colors={['#7aff85', '#a8ffaf', '#a8ffaf', '#7aff85']} style={styles.SigninButton}>
                        <Text style={styles.ButtonText}>Sign up</Text>
                    </LinearGradient>
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
    buttonContainer: {
        marginBottom: 15,
    },
    SigninButton: {
        width: 300,
        padding: 13,
        borderRadius: 5,
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center'
    }
  });