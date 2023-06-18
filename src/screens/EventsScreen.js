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
import { SearchBar } from "@rneui/themed";

import { ThemeContext } from "../../App";
import { RefreshControl } from "react-native-gesture-handler";
import GetEvents from "../components/GetEvents";

const EventsScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;

  const [modalVisible, setModalVisible] = useState(false);

  const [search, setSearch] = useState();
  const updateSearch = (search) => {
    setSearch(search);
  };

  const [focus, setFocus] = useState(false);
  const toggleFocus = () => {
    setFocus(!focus);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => {}} style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </Pressable>
      <View>
        <SearchBar
          round
          containerStyle={{
            borderRadius: 15,
            backgroundColor: thisTheme ? "#000" : "#8E8E8E",
          }}
          inputContainerStyle={{
            backgroundColor: thisTheme ? "#a4a4a4" : "#fff",
          }}
          searchIcon={{
            size: 32,
            color: thisTheme ? "#fff" : "#000",
          }}
          inputStyle={{
            fontSize: 20,
            color: thisTheme ? "#fff" : "#000",
          }}
          placeholderTextColor={thisTheme ? "#fff" : "#000"}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={toggleFocus}
          style={focus ? [styles.baseButton, styles.active] : styles.baseButton}
        >
          <Text style={styles.filterButtonText}>Dogs</Text>
        </Pressable>
        <Pressable
          onPress={toggleFocus}
          style={focus ? [styles.baseButton, styles.active] : styles.baseButton}
        >
          <Text style={styles.filterButtonText}>Events</Text>
        </Pressable>
        <Pressable
          onPress={toggleFocus}
          style={focus ? [styles.baseButton, styles.active] : styles.baseButton}
        >
          <Text style={styles.filterButtonText}>Places</Text>
        </Pressable>
      </View>
      <GetEvents setModalVisible={setModalVisible} theme={theme} />
      {/* <Modal
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
      </Modal> */}
    </SafeAreaView>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  openModalButton: {
    width: "80%",
    backgroundColor: "#264026",
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  baseButton: {
    width: "30%",
    backgroundColor: "#a4a4a4",
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  active: {
    backgroundColor: "#bced95",
  },
  filterButton: {
    width: "30%",
    backgroundColor: "#bced95",
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  filterButtonText: {
    textAlign: "center",
    fontSize: 20,
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
