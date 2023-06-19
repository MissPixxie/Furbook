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
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { ThemeContext } from "../../App";
import { RefreshControl } from "react-native-gesture-handler";
import GetEvents from "../components/GetEvents";
import GetDogs from "../components/GetDogs";
import GetPlaces from "../components/GetPlaces";
import SmallButton from "../components/SmallButton";

const EventsScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;

  const { colors } = theme;
  console.log(colors);

  const [modalVisible, setModalVisible] = useState(false);

  const [search, setSearch] = useState();
  const updateSearch = (search) => {
    setSearch(search);
  };

  const FILTER_TYPE = {
    dogs: "Dogs",
    events: "Events",
    places: "Places",
  };
  const [filterType, setFilterType] = useState(FILTER_TYPE.dogs);

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
        <SmallButton
          title="Dogs"
          iconName="paw"
          onPress={() => setFilterType(FILTER_TYPE.dogs)}
          active={filterType === FILTER_TYPE.dogs}
          icon={<Ionicons name="paw" size={20} color="white" />}
        />
        <SmallButton
          title="Events"
          iconName="events"
          onPress={() => setFilterType(FILTER_TYPE.events)}
          active={filterType === FILTER_TYPE.events}
          icon={<MaterialIcons name="event" size={20} color="white" />}
        />
        <SmallButton
          title="Places"
          iconName="location-pin"
          onPress={() => setFilterType(FILTER_TYPE.places)}
          active={filterType === FILTER_TYPE.places}
          icon={<Entypo name="location-pin" size={20} color="white" />}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: colors.primary }}>
        {filterType === FILTER_TYPE.dogs ? <GetDogs theme={theme} /> : null}
        {filterType === FILTER_TYPE.events ? <GetEvents theme={theme} /> : null}
        {filterType === FILTER_TYPE.places ? (
          <GetPlaces setModalVisible={setModalVisible} theme={theme} />
        ) : null}
      </View>

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
    marginRight: 7,
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
