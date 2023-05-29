import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, Button, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Post from "../components/Post";


const PostsScreen = ({ navigation }) => {

    return (
        <LinearGradient colors={['#bdbdbd', '#fff', '#bdbdbd']} style={styles.container}>
            <SafeAreaView>
                <Post />
            </SafeAreaView>            
        </LinearGradient>
    )
}

export default PostsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });