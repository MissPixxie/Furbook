import React from "react";
import { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Alert, FlatList } from "react-native";
import IP from "../../fetchIP";





export default function Post() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchPosts();
      }, []);


        const fetchPosts = async () => {
            const response = await fetch(IP + '/posts')
            const data = await response.json();
            setData(data);
            setLoading(false);
            const test = JSON.stringify(data);
        }

        return (
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Text>{item.title}</Text>
                        <Text>{item.text}</Text>
                        <Text>{item.comments}</Text>
                        <Text>{item.date}</Text>                       
                    </View>
                  )}
                />
        );
  }

  const styles = StyleSheet.create({
    postContainer: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    postTitle: {
        fontSize: 26,
    },
    postText: {
        fontSize: 22,
    },
    postComments: {
        fontSize: 18,
    }
  });