import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
  Keyboard,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import { LinearGradient } from "expo-linear-gradient";

import GetPlaces from "../components/GetPlaces";
import AddPlace from "../components/AddPlace";

import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../../App";
import { RefreshControl } from "react-native-gesture-handler";

const PlacesScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <GetPlaces setModalVisible={setModalVisible} theme={theme} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AddPlace />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openModalButton: {
    width: "80%",
    backgroundColor: "#264026",
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 26,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonClose: {
    borderRadius: 10,
    backgroundColor: "#264026",
    paddingVertical: 15,
    paddingHorizontal: 25,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    flex: 1,
    backgroundColor: "white",
  },
});
