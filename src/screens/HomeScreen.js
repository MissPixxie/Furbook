import React, { useContext, createContext, useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput, Button, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from "../components/Theme";



const HomeScreen = ({ navigation }) => {

    const theme = useContext(ThemeContext);

    const [newTheme, setnewTheme] = useState('light');

    const toggleTheme = () => setnewTheme(newTheme === 'light' ? 'dark' : 'light')
    console.log(newTheme);


    const [isSignedIn, setSignedIn] = useState(false);
    

    return (
        <ThemeContext.Provider value={theme}>
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
                        <Pressable onPress={() => navigation.navigate('Places')} style={styles.SignupButton}>
                                <Text style={[styles.ButtonText, styles.ButtonTextSignup]}>Places</Text>
                        </Pressable>           
                </View>
                        <Switch
                            trackColor={ newTheme === 'light' ? '#767577' : '#81ff83'}
                            thumbColor={newTheme === 'light' ? '#f4f3f4' : '#184718'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleTheme}
                            value={newTheme === 'light'}
                        />
                </SafeAreaView>            
            </LinearGradient>            
        </ThemeContext.Provider>

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