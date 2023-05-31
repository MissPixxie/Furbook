import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, Button, TouchableOpacity, FlatList, Modal } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Places from "../components/Places";
import AddPlace from "../components/AddPlace";



const PlacesScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <LinearGradient colors={['#acdbab', '#d7ffd6', '#acdbab']} style={styles.container}>
            <SafeAreaView>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <AddPlace />
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>

                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>
                        Add new place
                    </Text>
                </TouchableOpacity>

                <Places />

            </SafeAreaView>            
        </LinearGradient>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    addButton: {
        width: '80%',
        backgroundColor: '#264026',
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 26,
        paddingHorizontal: 5,
        paddingVertical: 10,
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonClose: {
        borderRadius: 10,
        backgroundColor: '#264026',
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
  });