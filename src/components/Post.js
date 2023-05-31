import React from "react";
import { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Alert, FlatList, TouchableOpacity } from "react-native";
import IP from "../../fetchIP";

import { AntDesign } from '@expo/vector-icons'; 





export default function Post() {
    const [isVisable, setIsVisable] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchPosts();
      }, []);


        const fetchPosts = async () => {
          try {
            const response = await fetch(IP + '/posts')
            const data = await response.json();
            setData(data);
            setLoading(false);
            const test = JSON.stringify(data);          
          }
          catch(error) {
            console.log(error.message);
          }
        }

        return (
          <SafeAreaView>
              <TouchableOpacity onPress={() => {}}>
                  <AntDesign name="pluscircle" style={styles.icon} size={46}/>                
              </TouchableOpacity>

                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Text style={styles.postTitle}>{item.title}</Text>
                        <Text style={styles.postText}>{item.text}</Text>
                        <Text style={styles.postComments} onPress={() => {setIsVisable(!isVisable)}}>Comments</Text>
                        {isVisable && <View>
                          <Text style={styles.metaComments}>{item.comments.commentTitle}</Text>
                          <Text style={styles.metaComments}>{item.comments.commentText}</Text>
                        </View>}
                        <Text style={styles.postDate}>{item.date}</Text>                       
                    </View>
                  )}
                />    
          </SafeAreaView>
        );
  }

  const styles = StyleSheet.create({
    icon: {
      marginVertical: 10,
      color: "#264026",
      alignSelf: 'center',
    },
    postContainer: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '90%',
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
        fontSize: 24,
    },
    postText: {
        marginVertical: 15,
        fontSize: 22,
    },
    postComments: {
        marginVertical: 5,
        fontSize: 18,
        color: 'green',
    },
    metaComments: {
      fontSize: 18,
    }
  });