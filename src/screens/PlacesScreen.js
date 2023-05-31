import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, TouchableOpacity, Modal, ScrollView } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import GetPlaces from "../components/GetPlaces";
import AddPlace from "../components/AddPlace";



const PlacesScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <LinearGradient colors={['#acdbab', '#d7ffd6', '#acdbab']} style={styles.container}>
            <SafeAreaView>
                <GetPlaces />
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                            }}>
                            <View style={[styles.centeredView, styles.inputContainer]}>
                                    <AddPlace />
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Close</Text>
                                    </Pressable>
                            </View>
                        </Modal>


                    <TouchableOpacity style={styles.openModalButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.buttonText}>
                            Add new place
                        </Text>
                    </TouchableOpacity>               
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
    openModalButton: {
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
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
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